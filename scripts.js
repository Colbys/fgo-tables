$(document).ready(function() {

	var dropmenu = "<select id=\"item\">" 
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"6001\">Shining Gem of Swords</option>"
	+ "<option value=\"6002\">Shining Gem of Bows</option>"
	+ "<option value=\"6003\">Shining Gem of Lances</option>"
	+ "<option value=\"6004\">Shining Gem of Cavalry</option>"
	+ "<option value=\"6005\">Shining Gem of Spells</option>"
	+ "<option value=\"6006\">Shining Gem of Killing</option>"
	+ "<option value=\"6007\">Shining Gem of Madness</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"6101\">Magic Gem of Swords</option>"
	+ "<option value=\"6102\">Magic Gem of Bows</option>"
	+ "<option value=\"6103\">Magic Gem of Lances</option>"
	+ "<option value=\"6104\">Magic Gem of Cavalry</option>"
	+ "<option value=\"6105\">Magic Gem of Spells</option>"
	+ "<option value=\"6106\">Magic Gem of Killing</option>"
	+ "<option value=\"6107\">Magic Gem of Madness</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"6201\">Secret Gem of Swords</option>"
	+ "<option value=\"6202\">Secret Gem of Bows</option>"
	+ "<option value=\"6203\">Secret Gem of Lances</option>"
	+ "<option value=\"6204\">Secret Gem of Cavalry</option>"
	+ "<option value=\"6205\">Secret Gem of Spells</option>"
	+ "<option value=\"6206\">Secret Gem of Killing</option>"
	+ "<option value=\"6207\">Secret Gem of Madness</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"6516\">Unlucky Bone</option>"
	+ "<option value=\"6505\">Void's Refuse</option>"
	+ "<option value=\"6503\">Hero's Proof</option>"
	+ "<option value=\"6512\">Dragon Fang</option>"
	+ "<option value=\"6522\">Chains of the Fool</option>"
	+ "<option value=\"6527\">Stinger of Certain Death</option>"
	+ "<option value=\"6530\">Magical Cerebrospinal Fluid</option>"
	+ "<option value=\"6533\">Night-Weeping Iron Stake</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"6508\">Ghost Lantern</option>"
	+ "<option value=\"6502\">Yggdrasil Seed</option>"
	+ "<option value=\"6515\">Octuplet Twin Crystals</option>"
	+ "<option value=\"6501\">Phoenix Plume</option>"
	+ "<option value=\"6509\">Snake Jewel</option>"
	+ "<option value=\"6514\">Homunculus Baby</option>"
	+ "<option value=\"6513\">Meteoric Horseshoe</option>"
	+ "<option value=\"6511\">Forbidden Page</option>"
	+ "<option value=\"6510\">Infinity Gear</option>"
	+ "<option value=\"6524\">Medal of Great Knight</option>"
	+ "<option value=\"6526\">Seashell of Reminiscence</option>"
	+ "<option value=\"6532\">Kotan Magatama</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"6506\">Dragon's Reverse Scale</option>"
	+ "<option value=\"6507\">Talon of Chaos</option>"
	+ "<option value=\"6517\">Heart of a Foreign God</option>"
	+ "<option value=\"6520\">Bloodstone Tear</option>"
	+ "<option value=\"6521\">Black Tallow</option>"
	+ "<option value=\"6518\">Spirit Root</option>"
	+ "<option value=\"6519\">Warhorse's Immature Horn</option>"
	+ "<option value=\"6523\">Lamp of Demon Sealing</option>"
	+ "<option value=\"6525\">Scarab of Wisdom</option>"
	+ "<option value=\"6528\">Primodial Lanugo</option>"
	+ "<option value=\"6529\">Cursed Beast Chloecyst</option>"
	+ "<option value=\"6531\">Bizarre Godly Wine</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"7001\">Saber Piece</option>"
	+ "<option value=\"7002\">Archer Piece</option>"
	+ "<option value=\"7003\">Lancer Piece</option>"
	+ "<option value=\"7004\">Rider Piece</option>"
	+ "<option value=\"7005\">Caster Piece</option>"
	+ "<option value=\"7006\">Assassin Piece</option>"
	+ "<option value=\"7007\">Berserker Piece</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"7101\">Saber Monument</option>"
	+ "<option value=\"7102\">Archer Monument</option>"
	+ "<option value=\"7103\">Lancer Monument</option>"
	+ "<option value=\"7104\">Rider Monument</option>"
	+ "<option value=\"7105\">Caster Monument</option>"
	+ "<option value=\"7106\">Assassin Monument</option>"
	+ "<option value=\"7107\">Berserker Monument</option>"
	+ "<option value=\"none\">---</option>"
	+ "<option value=\"94000505\">Twinkle Candy</option>"
	+ "<option value=\"94000905\">Golden Skull</option>"
	+ "<option value=\"94001205\">Chicken Bucket</option>"
	+ "<option value=\"94002005\">Sharp Knife</option>"
	+ "<option value=\"94003112\">Crystal Ball</option>"
	+ "<option value=\"94004509\">Golder Bear Lighter</option>"
	+ "<option value=\"94005606\">Ringing Bell Branch</option>"
	+ "<option value=\"94006404\">Heart Bracelet</option>"
	+ "<option value=\"94007704\">Dragon Orb</option>"
	+ "<option value=\"94009006\">Gilles de Rais Doll</option>"
	+ "<option value=\"999001\">Ranjatal</option>"
	+ "<option value=\"999002\">Ribbon of Reminiscence</option>"
	+ "<option value=\"94015007\">Golden Reed</option>"
	+ "<option value=\"94017504\">B-Pellet</option>"
	+ "<option value=\"94018806\">Santa Moustache</option>"
	+ "</select>"

	$('#generatebutton').click(function () {
		$("#fgo-table").empty();
		var row = $("<tr class=\"row\"></tr>");
		$("#fgo-table").append(row);
		row.append($("<td class=\"data\">Уровень</td>"));
		for (var i = 0; i < $("#itemcount").val(); i++) {
			row.append($("<td class=\"data\">Предмет " + (i+1) + "</td>"));
		}
		row.append($("<td>QP</td>"));

		if ($("#ascension").is(":checked")) {
			for (var i = 0; i < 4; i++) {
				var itemRow = $("<tr class=\"row\"></tr>");
				$("#fgo-table").append(itemRow);
				itemRow.append($("<td class=\"data\">" + (i+1) + "</td>"));
				for (var j = 0; j < $("#itemcount").val(); j++) {
					itemRow.append($("<td class=\"data\">" + dropmenu + 
						"<input class=\"table__amount\" type=\"number\" name=\"amount\" placeholder=\"Value\" id=\"amount\">" + 
						"</td>"));
				}
				itemRow.append($("<td class=\"data\">" + 
					"<input class=\"table__qp\" type=\"number\" name=\"qpcount\" placeholder=\"QP value\" id=\"qpcount\">" +"</td>"));
			}
		} else {
			for (var i = 0; i < 10; i++) {
				var itemRow = $("<tr class=\"row\"></tr>");
				$("#fgo-table").append(itemRow);
				itemRow.append($("<td class=\"data\">" + (i+1) + "</td>"));
				for (var j = 0; j < $("#itemcount").val(); j++) {
					itemRow.append($("<td class=\"data\">" + dropmenu + 
						"<input class=\"table__amount\" type=\"number\" name=\"amount\" placeholder=\"Value\" id=\"amount\">" + 
						"</td>"));
				}
				itemRow.append($("<td class=\"data\">" + 
					"<input class=\"table__qp\" type=\"number\" name=\"qpcount\" placeholder=\"QP value\" id=\"qpcount\">" +"</td>"));
			}
		}

		$("#fgo-table").append($("<input type=\"button\" form=\"fgo-form\" value=\"Compile\" id=\"compilebutton\">"));
	});

	$('#compilebutton').click(function () {
		console.log("hello");
	});
});