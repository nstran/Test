import { Pipe, PipeTransform } from "@angular/core";
import { User } from "./user";

@Pipe({
    name : "isAdult"
})
export class isAdultPipe implements PipeTransform {
    transform(arr : User[]) : User [] {
        return arr.filter(x => x.age > 19)
    }
}