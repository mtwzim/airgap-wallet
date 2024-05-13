FROM node:20

# See https://crbug.com/795759
RUN apt-get update && apt-get install -yq libgconf-2-4 bzip2 build-essential libxtst6
RUN apt-get install -yq git

# Required by @ledgerhq dependencies
RUN apt-get install libusb-1.0-0

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update && apt-get install -y wget --no-install-recommends \
	&& wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
	&& sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
	&& apt-get update \
	&& apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
	--no-install-recommends --allow-unauthenticated \
	&& rm -rf /var/lib/apt/lists/* \
	&& apt-get purge --auto-remove -y curl \
	&& rm -rf /src/*.deb

# create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies, using wildcard if package-lock exists
COPY package.json /app
COPY package-lock.json /app
COPY config /app/config
COPY apply-diagnostic-modules.js /app
COPY fix-qrscanner-gradle.js /app
COPY patch-dependency-versions.js /app
COPY patch-coinlib.js /app
COPY copy-builtin-modules.js /app
COPY browserify-coinlib.js /app

# install dependencies
RUN npm install --legacy-peer-deps

# install static webserver
RUN npm install node-static -g

# Bundle app source
COPY . /app

# browserify coin-lib
RUN npm run browserify-coinlib

# set to production
RUN export NODE_ENV=production

# build
RUN npm run build:prod

CMD ["static", "-p", "8100", "-a", "0.0.0.0", "www"]
