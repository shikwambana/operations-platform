import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { staff } from './staff.model';
import { leaves } from './leaves.model';

@JsonObject
export class employee {
  @JsonProperty('staff', staff, true)
  public staff: staff = new staff();

  @JsonProperty('leaves', leaves, true)
  public leaves: leaves = new leaves();

}