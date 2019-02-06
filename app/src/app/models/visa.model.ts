import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class visa {
  @JsonProperty('full_name', String, true)
  public full_name: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('phone', Number, true)
  public phone: number = undefined;

}