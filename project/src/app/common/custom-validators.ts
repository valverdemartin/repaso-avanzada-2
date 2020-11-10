import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ProductService } from '../services/product.service';

export class CustomValidators {   

    static emailExists(productService: ProductService): AsyncValidatorFn {       
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
          if (control.value == '') {
            return null;
          }
          else {
            return productService.getUsers()
                .then(response => {
                    return response.find(user=>user.email == control.value) ?  null : { 'emailExists': { value: control.value } };
                })
          }                  
        };
      }
}
