import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class leaverequest {
  @JsonProperty('leaveType', String, true)
  public leaveType: string = undefined;

  @JsonProperty('fromDate', Date, true)
  public fromDate: Date = undefined;

  @JsonProperty('toDate', Date, true)
  public toDate: Date = undefined;

  @JsonProperty('duration', Number, true)
  public duration: number = undefined;

  @JsonProperty('leaveStatus', String, true)
  public leaveStatus: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

  @JsonProperty('managerName', String, true)
  public managerName: string = undefined;

  @JsonProperty('leaveReason', String, true)
  public leaveReason: string = undefined;

}