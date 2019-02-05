import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class visa {
  @JsonProperty('full_name', String, true)
  public full_name: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

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

  @JsonProperty('documents', String, true)
  public documents: string = undefined;

}