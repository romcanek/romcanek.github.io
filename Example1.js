var knight;
class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"})
    }

    preload() {
        this.load.image('bg', 'assets/bg.jpg')
        this.load.image('idle1', 'assets/frames/knight_f_idle_anim_f0.png')
        this.load.image('idle2', 'assets/frames/knight_f_idle_anim_f1.png')
        this.load.image('idle3', 'assets/frames/knight_f_idle_anim_f2.png')
        this.load.image('idle4', 'assets/frames/knight_f_idle_anim_f3.png')
        this.load.image('run1', 'assets/frames/knight_f_run_anim_f0.png')
        this.load.image('run2', 'assets/frames/knight_f_run_anim_f1.png')
        this.load.image('run3', 'assets/frames/knight_f_run_anim_f2.png')
        this.load.image('run4', 'assets/frames/knight_f_run_anim_f3.png')
        this.load.image('line', 'assets/line.png')
    }
    create() {
        this.bg = this.add.image(400,300, 'bg')
        this.bg.setScale(2)

        this.line = this.physics.add.image(512, 505, 'line').setImmovable(true);
        this.line.body.setAllowGravity(false);

        this.anims.create({
            key: 'idle',
            frames: [
                {key: 'idle1'},
                {key: 'idle2'},
                {key: 'idle3'},
                {key: 'idle4'}
            ],
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'run',
            frames: [
                {key: 'run1'},
                {key: 'run2'},
                {key: 'run3'},
                {key: 'run4'}
            ],
            frameRate: 10,
            repeat: -1
        })
        knight = this.physics.add.sprite(100,400,'idle1').play('idle')
        knight.setScale(2.5);
        this.physics.add.collider(knight, this.line)
        //this.input.keyboard.on('keydown-A', function () {
        //    knight.x -= 10;
        //    knight.scaleX = -2.6;
        //});
        //this.input.keyboard.on('keydown-D', function () {
        //    knight.x += 0.1
        //    knight.play('run')
        //    knight.scaleX = 2.6;
        //});
        this.createCursor()       
    }
    createCursor(){
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    update(){
        if (this.cursors.left.isDown)
        {
            knight.x -= 3;
            knight.anims.play('run', true);
            knight.scaleX = -2.6;
        }
        else if (this.cursors.right.isDown)
        {
            knight.x += 3;
            knight.anims.play('run', true);
            knight.scaleX = 2.6;
        }
        else
        {
            knight.anims.play('idle', true)
        }
    }
}