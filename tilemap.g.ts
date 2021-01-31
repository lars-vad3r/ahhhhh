// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`100010000909090909080a080a080a0808080a0a0a01060209080a01060606060606020a0a0405070a08080405050505050507090804050708080804050505050505070a0a0405050606060505050505050507090a04050505050505050505050505070a0a0405050b0b0505050505050505070a080405070a080405050505050505070909030505060605050b0505050505070a090a0305050505070a03050505050c0a080a0a03050505070a0a040505070a0a09090a0a04050507080a04050507090809080a0a040505070a0904050507090a09090106050505070a0804050505020a0809030b0b0b0b0c0909030b0b0b0c09080a080a08090a0a08090a090a09080a`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 . . . . . . . . 2 
2 . . . 2 2 2 . . . . . . . . 2 
2 . . . 2 2 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . 2 . . . . . . 2 
2 2 2 . . . . . 2 2 . . . . 2 2 
2 2 2 2 . . . . 2 2 . . . . 2 2 
2 2 2 2 . . . . 2 2 . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . 2 
2 2 . . . . . . 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath8,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
