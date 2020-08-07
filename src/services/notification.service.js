import { Notify } from 'quasar'

/**
 * Custom Notification Messages
 */
export default {
  /**
   * Show success messages
   * @param message
   */
  showSucces (message) {
    Notify.create({
      message: message,
      color: 'positive',
      icon: 'info',
      position: 'bottom-right',
      timeout: 6000,
      actions: [{ icon: 'close', round: true, color: 'white' }]
    })
  },

  /**
   * Show error messages
   * @param message
   */
  showError (message) {
    Notify.create({
      message: message,
      color: 'negative',
      icon: 'report_problem',
      position: 'bottom-right',
      height: '500px',
      timeout: 8000,
      actions: [{ icon: 'close', round: true, color: 'white' }]
    })
  },

  /**
   * Show warning messages
   * @param message
   */
  showWarning (message) {
    Notify.create({
      message: message,
      color: 'warning',
      icon: 'warning',
      position: 'bottom-right',
      timeout: 8000,
      actions: [{ icon: 'close', round: true, color: 'white' }]
    })
  },

  /**
   * Show custom notification
   * @param message
   * @param color
   */
  customNotification (message, color) {
    Notify.create({
      message: message,
      color: color,
      position: 'bottom-right',
      actions: [{ icon: 'close', round: true, color: 'white' }]
    })
  }
}
