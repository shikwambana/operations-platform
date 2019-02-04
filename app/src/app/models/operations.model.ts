import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class operations {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('message', String, true)
  public message: string = undefined;

}