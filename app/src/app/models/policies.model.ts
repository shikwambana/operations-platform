import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class policies {
  @JsonProperty('title', String, true)
  public title: string = undefined;

  @JsonProperty('content', String, true)
  public content: string = undefined;

  @JsonProperty('category', String, true)
  public category: string = undefined;

  @JsonProperty('procedure', String, true)
  public procedure: string = undefined;

  @JsonProperty('formlink', String, true)
  public formlink: string = undefined;

}