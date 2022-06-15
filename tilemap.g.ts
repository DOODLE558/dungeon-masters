// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e00140003050505050505050505050505050505050505050505050505050505050208090909050509090909090909090909090909090909090909090909090608100f100505090909090305050209090909090909090909090909090906080909090505090909090a0b0c06090909090909090909090909090909060a0905050505050505090a0d0e06090909090909090909090909090909060809090909090909050904070701090909090909090909090909090909060a05050505050509050909090909090909090909090909090909090909060809090909090909050909090909090909090909090909090909090909060809050505050505050909090909090909090909090909090909090909060809090505090909090909090909090909090909090909090909090909060805090905090909090909090909090909090909090909090909090909060805050909090909090909090909090909090909090909090909090909060809090909090909090909090909090909090909090909090909090909060809090909090909090909090909090909090909090909090909090909060a09090909090909090909090909090909090909090909090909090909060a09090909090909090909090909090909090909090909090909090909060a09090909090909090909090909090909090909090909090909090909060a09090909090909090909090909090909090909090909090909090909060a0909090909090909090909090909090909090909090909090909090906040707070707070707070707070707070707070707070707070707070701`, img`
222222222222222222222222222222
2...22.......................2
22.222....2222...............2
2...22....2..2...............2
2.2222222.2..2...............2
2.......2.2222...............2
2222222.2....................2
2.......2....................2
2.2222222....................2
2..22........................2
22..2........................2
222..........................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
2............................2
222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.doorOpenNorth,sprites.dungeon.greenOuterNorth2], TileScale.Sixteen);
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
// Auto-generated code. Do not edit.
