import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class policies {
  @JsonProperty('Title', String, true)
  public Title: string = undefined;

  @JsonProperty('Content', String, true)
  public Content: string = undefined;

  @JsonProperty('Acknowledgement', Boolean, true)
  public Acknowledgement: boolean = undefined;

  @JsonProperty('Category', String, true)
  public Category: string = undefined;

}