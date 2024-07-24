﻿NDSummary.OnToolTipsLoaded("File:GroundTile.cs",{147:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype147\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\">GroundTile</div></div></div><div class=\"TTSummary\">Represents a ground tile in the game.</div></div>",149:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype149\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[SerializeField]</span></div><div class=\"PSection PPlainSection\">GameObject coinPrefab</div></div><div class=\"TTSummary\">Reference to the coin prefab.</div></div>",150:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype150\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[SerializeField]</span></div><div class=\"PSection PPlainSection\">GameObject obstaclePrefab</div></div><div class=\"TTSummary\">Reference to the obstacle (wood stump).</div></div>",151:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype151\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[SerializeField]</span></div><div class=\"PSection PPlainSection\">GameObject crouchObstaclePrefab</div></div><div class=\"TTSummary\">Reference to the crouch obstacle.</div></div>",152:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype152\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[SerializeField]</span></div><div class=\"PSection PPlainSection\">GameObject rockPrefab</div></div><div class=\"TTSummary\">Reference to the rock prefab.</div></div>",153:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype153\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">[SerializeField]</span></div><div class=\"PSection PPlainSection\">GameObject enemyPrefab</div></div><div class=\"TTSummary\">Reference to the enemy prefab.</div></div>",154:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype154\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private readonly float</span>[] spawnPositions</div></div><div class=\"TTSummary\">Since the game is divided in three lanes, here are stored their positions.</div></div>",155:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype155\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private</span> GroundSpawner groundSpawner</div></div><div class=\"TTSummary\">Reference to the ground spawner.</div></div>",157:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype157\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> Start()</div></div><div class=\"TTSummary\">Here we call the functions to spawn the obstalces, the enemies, the rocks and the coins.</div></div>",158:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype158\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> OnTriggerExit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Collider&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Here it\'s checked when the player exits the tile.</div></div>",159:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype159\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> SpawnObstacle()</div></div><div class=\"TTSummary\">Spawns an obstacle on this ground tile.</div></div>",160:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype160\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> SpawnCoins(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">spawnIndex,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">numCoins</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spawns coins on this ground tile.</div></div>",161:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype161\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">private void</span> SpawnEnemies()</div></div><div class=\"TTSummary\">Spawns enemies on this ground tile.</div></div>",162:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype162\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> SpawnRock(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Vector3&nbsp;</td><td class=\"PName last\">spawnPoint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spawns a rock obstacle at the specified position.</div></div>"});