import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class services {
  @JsonProperty('title', String, true)
  public title: string = undefined;

  @JsonProperty('link', String, true)
  public link: string = undefined;

}