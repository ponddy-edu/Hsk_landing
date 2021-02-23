export function AutoUnsub(obs$ = []) {
  return (constructor: any) => {
    const orig = constructor.prototype.ngOnDestroy
    constructor.prototype.ngOnDestroy = function() {
      // tslint:disable-next-line:forin
      for (const prop in this) {
        const property: any = this[prop]
        // @ts-ignore
        if (typeof property.unsubscribe === 'function' && !obs$.includes(property)) {
          // @ts-ignore
          obs$.push(property)
        }
      }
      for (const ob$ of obs$) {
        // @ts-ignore
        ob$.unsubscribe()
        console.log('ob.unsubscribe')
      }
      orig.apply()
    }
  }
}
