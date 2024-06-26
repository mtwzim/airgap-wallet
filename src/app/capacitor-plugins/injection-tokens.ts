import { InjectionToken } from '@angular/core'
import { BrowserPlugin } from '@capacitor/browser'
import { PushNotificationsPlugin } from '@capacitor/push-notifications'
import { SharePlugin } from '@capacitor/share'
import { FilePickerPlugin } from '@capawesome/capacitor-file-picker'
import { SaplingNativePlugin } from './definitions'

export const BROWSER_PLUGIN = new InjectionToken<BrowserPlugin>('BrowserPlugin')
export const PUSH_NOTIFICATIONS_PLUGIN = new InjectionToken<PushNotificationsPlugin>('PushNotificationsPlugin')
export const SHARE_PLUGIN = new InjectionToken<SharePlugin>('SharePlugin')

export const SAPLING_PLUGIN = new InjectionToken<SaplingNativePlugin>('SaplingPlugin')
export const FILE_PICKER_PLUGIN = new InjectionToken<FilePickerPlugin>('FilePickerPlugin')
