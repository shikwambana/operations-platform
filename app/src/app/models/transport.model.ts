import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class transport {
  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('destination', String, true)
  public destination: string = undefined;

  @JsonProperty('from', String, true)
  public from: string = undefined;

  @JsonProperty('to', String, true)
  public to: string = undefined;

  @JsonProperty('time', String, true)
  public time: string = undefined;

  @JsonProperty('additional_info', String, true)
  public additional_info: string = undefined;

  @JsonProperty('whatsapp_num', Number, true)
  public whatsapp_num: number = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

}