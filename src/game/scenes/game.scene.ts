import { Keys } from "../helpers/keys";
import { Image } from "../helpers/types";

export class GameScene extends Phaser.Scene {
	public image!: Image;

	constructor() {
		super(Keys.Scenes.Game);
	}

	public create(): void {
		this.image = this.add.image(400, 300, Keys.Images.Logo);
	}

	public update(): void {
		this.image.rotation += 0.01;
	}
}
