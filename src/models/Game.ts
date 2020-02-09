import { Player } from "@/models/Player";
import { Estimate } from "@/models/Estimate";

export class Game {
  constructor(
    public id: string,
    public players: Array<Player> = [],
    public estimates: Array<Estimate> = []
  ) {}
}
