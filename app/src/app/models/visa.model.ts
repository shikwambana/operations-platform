import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class visa {
  @JsonProperty('visaExpiry', Date, true)
  public visaExpiry: Date = undefined;

  @JsonProperty('passportNumber', String, true)
  public passportNumber: string = undefined;

  @JsonProperty('phone', Number, true)
  public phone: number = undefined;

  @JsonProperty('expiry_date', Date, true)
  public expiry_date: Date = undefined;

  @JsonProperty('passport_number', String, true)
  public passport_number: string = undefined;

  @JsonProperty('renew', String, true)
  public renew: string = undefined;

  @JsonProperty('time', String, true)
  public time: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

}