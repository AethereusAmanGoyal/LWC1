import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ObjectForm extends LightningElement {
@api obj;
@api recordTypeId ;


 myFields = [NAME_FIELD, PHONE_FIELD];

 @wire(getObjectInfo, { objectApiName: '$obj' })
handleObjectInfo({error, data}) {
    if (data) {
        console.log('this.obj--'+this.obj);
      console.log('data objectApi --'+JSON.stringify(data));
        this.recordTypeId = data.defaultRecordTypeId;
        console.log('this.recordTypeId---'+this.recordTypeId);
    }
    else if(error){
       console.log(error);
   }
   }

   handleAccountCreated(){
  // if(this.obj === 'Account'){
  //   console.log('Inside if condition');
  //   }

    const evt = new ShowToastEvent({
      title: 'Record Created',
      // message: this.message,
      variant: 'success',
  });
  this.dispatchEvent(evt);
}
   


}