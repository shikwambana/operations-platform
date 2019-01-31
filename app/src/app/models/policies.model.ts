import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class policies {
  @JsonProperty('title', String, true)
  public title: string = undefined;

  @JsonProperty('content', String, true)
  public content: string = undefined;

  @JsonProperty('acknowledgement', Boolean, true)
  public acknowledgement: boolean = undefined;

  @JsonProperty('category', String, true)
  public category: string = undefined;

}