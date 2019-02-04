import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class categories {
  @JsonProperty('category', [String], true)
  public category: string[] = [];

}