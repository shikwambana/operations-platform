import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class policies {
  @JsonProperty('title', String, true)
  public title: string = undefined;

  @JsonProperty('content', String, true)
  public content: string = undefined;

  @JsonProperty('acknowledgement', String, true)
  public acknowledgement: string = undefined;

  @JsonProperty('category', String, true)
  public category: string = undefined;

}