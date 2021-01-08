/**
 * Get our services
 * @param state
 * @returns {Array}
 */
export function ourServices (state) {
  return state.ourServices
}

export function ourServicesType () {
  return {
    PREMIUM_POST: 'PREMIUM_POST',
    FREE_POST: 'FREE_POST',
    PURCHASE_POST: 'PURCHASE_POST',
    APPRAISAL: 'APPRAISAL',
    TAX_CALCULATOR: 'TAX_CALCULATOR'
  }
}
