import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class visa {
  @JsonProperty('passport_number', String, true)
  public passport_number: string = undefined;

}