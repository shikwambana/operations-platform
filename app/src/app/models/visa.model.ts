import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class visa {
  @JsonProperty('visaExpiry', Date, true)
  public visaExpiry: Date = undefined;

  @JsonProperty('passportNumber', String, true)
  public passportNumber: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('time', String, true)
  public time: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

}