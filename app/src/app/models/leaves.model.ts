import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class leaves {
  @JsonProperty('annualLeaves', Number, true)
  public annualLeaves: number = undefined;

  @JsonProperty('sickLeaves', Number, true)
  public sickLeaves: number = undefined;

  @JsonProperty('approvedLeaves', Number, true)
  public approvedLeaves: number = undefined;

}