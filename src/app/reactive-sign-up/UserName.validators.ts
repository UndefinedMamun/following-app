import { AbstractControl, ValidationErrors } from "@angular/forms";



export class UserNameValidators{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(" ") >= 0)
            return {cannotContainSpace: true};
        return null;
    }

    static usernameTaken(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(control.value === "mamun")
                    resolve({usernameTaken: true});
                else
                    resolve(null);
            },2000)
        })
        
        
        
    }
}