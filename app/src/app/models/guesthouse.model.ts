import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class guesthouse {
  @JsonProperty('problem', String, true)
  public problem: string = undefined;

  @JsonProperty('guest_house', String, true)
  public guest_house: string = undefined;

  @JsonProperty('unit_number', Number, true)
  public unit_number: number = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('to_know', String, true)
  public to_know: string = undefined;

  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('whatsapp_num', Number, true)
  public whatsapp_num: number = undefined;

}