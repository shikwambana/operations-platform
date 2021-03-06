import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class flight {
  @JsonProperty('airlines', String, true)
  public airlines: string = undefined;

  @JsonProperty('ticket_number', String, true)
  public ticket_number: string = undefined;

  @JsonProperty('arrival', String, true)
  public arrival: string = undefined;

  @JsonProperty('departure', String, true)
  public departure: string = undefined;

  @JsonProperty('airport', String, true)
  public airport: string = undefined;

  @JsonProperty('date', String, true)
  public date: string = undefined;

  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

}