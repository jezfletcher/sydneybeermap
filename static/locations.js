var locations = [
{
  name: "Bitter Phew",
  link: "http://bitterphew.com",
  nowtapped: "bitterphew",
  address: "Level 1, 138 Oxford St, Darlinghurst",
  location: new google.maps.LatLng(-33.879897,151.215561),
  description: "I think you'd be hard pressed to argue that there's currently a better beer bar in Sydney than Bitter Phew. Although it doesn't have the longest roster of taps in the city, it certainly does put an amazing amount of effort into getting interesting and unique brews. Most likely there will be at least four or five taps on here that you won't find elsewhere. Throw in some amazingly friendly and hospitable staff and a really cool first-floor Oxford Street vibe, and you have a truly wonderful venue. Currently, they don't serve food on-site, but you can order in takeaway from any number of local restaurants, including the excellent Mr Crackles. As an added bonus, on any given day you're likely to run into one or two of the Sydney craft beer scene's most enthusiastic punters—often themselves staff from other local craft beer venues.",
  type: 'innerbar'
},
{
  name: "The Local Taphouse",
  link: "http://thelocal.com.au/darlinghurst/",
  nowtapped: "thelocaltaphousedl",
  address: "122 Flinders St (cnr South Downling St), Darlinghurst",
  location: new google.maps.LatLng(-33.884596, 151.218138),
  description: "Sydney's counterpart to Melbourne's St Kilda original, The Local was once the only place in Sydney you'd be guaranteed to find a good tap list. Nowadays, of course, there are many others, but it's still hard to deny that the Local is a good spot to drop in. 20 rotating taps (usually incl. 1 craft cider), mixed between local and imported craft. They also regularly have special events, such as “AleStars” themed beer evenings, and SpecTapulars, where all the taps will be given over to a particular theme, style or region.",
  type: 'innerbar'
},
{
  name: "Harts Pub",
  link: "http://hartspub.com.au",
  nowtapped: "hartspub",
  address: "176 Cumberland St, The Rocks",
  location: new google.maps.LatLng(-33.861841, 151.206430
),
  description: "A great little location in the Rocks, and a must if you're doing a pub-crawl of the area's historic pubs (even though Harts itself is a relatively new addition). Four “house” beers by The Rocks Brewing company (decent, but nothing spectacular), plus a range of other Aussie craft beers. Usually around 12 beers on tap.",
  type: 'innerbar'
},
{
  name: "Spooning Goats",
  link: "http://www.spooninggoats.com.au/",
  nowtapped: "spooninggoats",
  address: "Basement Level, 32 York St, Sydney",
  location: new google.maps.LatLng(-33.869028, 151.206162),
  description: "My favourite lounge-room away from home. Interesting decor, and four taps of well-selected craft, focusing on NSW breweries. They also have a small selection of well-chosen bottled beers, and a cool vibe. One of the best places in the Sydney CBD for drinks.",
  type: 'innerbar'
},
{
  name: "Royal Albert Hotel",
  link: "http://www.royalalberthotel.com.au/",
  nowtapped: "royalalberthotel",
  address: "140 Commonwealth St (cnr Reservoir St), Surry Hills",
  location: new google.maps.LatLng(-33.881162,151.210931),
  description: "An old-style Sydney pub, which has turned over its taps to some better beers, and has now become one of Sydney's premier craft beer venues. They also occasionally have events and tap takeovers, where they'll give all the taps over to one brewery. Also, a good food menu, both with pub favourites and a solid dumpling bar. Try the Royale with Cheese.<br/><br/>Note: still has a large bank of pokies in the back, in case that sort of thing bothers you. However, the manager has mentioned that he'd like to get rid of them sometime in the future.",
  type: 'innerbar'
},
{
  name: "Quarrymans Hotel",
  link: "http://www.quarrymanshotel.com.au",
  nowtapped: "quarrymanshotel",
  address: "Cnr Harris St & Pyrmont Bridge Rd, Pyrmont",
  location: new google.maps.LatLng(-33.8711686, 151.1949302),
  description: "23 taps of beer, plus 2 hand-pumps in pints, half-pints and \"tasting belts\". Disappointingly, the range is often all pretty samey, with 23 pale ales, pale lagers and perhaps an amber. Still, it's something of an oasis in the other wise craft-beer poor area of Pyrmont.<br/><br/>Note: the pub still has a large bank of pokies, and prominently advertises this fact out the front, in case that sort of thing bothers you.",
  type: 'innerbar'
},
{
  name: "Frankie's Pizza",
  nowtapped: "frankiespizza",
  address: "50 Hunter St, Sydney",
  location: new google.maps.LatLng(-33.865895, 151.209399
),
  description: "A very popular basement dive bar, which can be very busy on Fridays and weekends. About 12 taps and an excellent bottle list (plus a large bank of pinball machines). It is run by the same folks who set up Baxter Inn and Shady Pines.",
  type: 'innerbar'
},
{
  name: "Pumphouse Bar",
  link: "http://pumphousebar.com.au",
  nowtapped: "pumphousebarrestaurant",
  address: "17 Little Pier St, Darling Harbour",
  location: new google.maps.LatLng(-33.877537, 151.202200),
  description: "Usually has a couple of interesting taps on, including two house beers (not particularly good), but with a pretty decent bottle list (~100 beers) from all over, including things that are difficult to source in Australia like Bear Republic, Mikkeller and BrewDog. Nice big area with plenty of space to hang out. Decent food too.",
  type: 'innerbar'
},
{
  name: "Lord Nelson Brewery Hotel",
  link: "http://www.lordnelsonbrewery.com",
  nowtapped: "lordnelsonbreweryhotel",
  address: "19 Kent St, Millers Point",
  location: new google.maps.LatLng(-33.858179, 151.203380),
  description: "Supposedly one of the oldest pubs in Sydney, with a range of house beers on tap, including the excellent if seasonal Nelson's Blood. Otherwise, the beers are solid English-style brews, but the bar itself is worth a visit nonetheless.",
  type: 'innerbar'
},
{
  name: "Yulli's",
  link: "http://yullis.com.au",
  nowtapped: "yullis",
  address: "417 Crown St, Surry Hills",
  location: new google.maps.LatLng(-33.886382, 151.213712),
  description: "Vegetarian restaurant/bar (don't let that put you off) that specialises in beer to complement food. Usually has a small, but really well selected beer list, including a bank of taps, and a range of around 4 house brews.",
  type: 'innerbar'
},
{
  name: "The Dove & Olive",
  link: "http://doveandolive.com.au",
  nowtapped: "doveolivehotel",
  address: "156 Devonshire Street, Surry Hills",
  location: new google.maps.LatLng(-33.887221,151.210103),
  description: "Great pub with a large number of taps, which has a good relationship with a bunch of local breweries, so you're always likely to find something local and interesting on tap. The food's good too, and on numerous occasions that I've been there, they've been playing the darts on TV—so, you know, bonus.",
  type: 'innerbar'
},
{
  name: "The Keg & Brew (The KB)",
  link: "http://kegandbrew.com.au",
  nowtapped: "kegandbrew",
  address: "26 Foveaux St, Surry Hills",
  location: new google.maps.LatLng(-33.883891,151.209922),
  description: "Run by the same folks as the Dove & Olive, the Keg & Brew currently (I believe) holds the record for the most individual taps in Sydney, which is vaguely ridiculous, because it's a pretty tiny venue. Still, with 25+ different beers, you're always likely to find something good, as well as some good American-styled food",
  type: 'innerbar'
},
{
  name: "Black Penny",
  link: "http://blackpenny.com.au",
  address: "648 Bourke St, Redfern",
  location: new google.maps.LatLng(-33.891894,151.214523),
  description: "Right on the border of Redfern and Surry Hills is this little gem, which has a really cool vibe and enthusiastic staff. Small tap list, probably often verging towards the generic, but if you're in the area anyway, it's definitely worth a stop",
  type: 'innerbar'
},
{
  name: "Trinity Bar",
  nowtapped: "trinitybar",
  address: "505 Crown St, Surry Hills",
  location: new google.maps.LatLng(-33.888642,151.213191),
  description: 'A key bar in the centre of Surry Hills, they\'ve slowly been taking on more craft taps, which is a great thing, because their central location in a key nightlife area of Sydney puts them in a good spot to pick up more punters. It\'s a really nice pub, so here\'s hoping they continue to grow',
  type: 'innerbar',
},
{
  name: "Shady Pines Saloon",
  address: "Foley St, off Crown St, Darlinghurst",
  location: new google.maps.LatLng(-33.878965, 151.215517),
  description: "Technically “Shop 4, 256 Crown St, Darlinghurst” the entry is actually on Foley St, and is unmarked, and simply covered in white paper. Crazy american themed hunting-lodge style inside, with a well-selected beer list, mostly bottled. Not a key location if you're specifically seeking out craft beer, but it's still probably one of the more fun bars in Sydney.",
  type: 'innerbar'
},
{
  name: "The Baxter Inn",
  link: "http://thebaxterinn.com",
  nowtapped: "thebaxterinn",
  address: "Basement Level, 152 Clarence St, Sydney",
  location: new google.maps.LatLng(-33.869687, 151.205623),
  description: "Small selection of well-chosen beer (a better range of Scotch, if that's your thing), tends to get packed on busy nights: you may be better at Spooning Goats, and for a better range of beer, try Frankie's Pizza, run by the same guys.",
  type: 'innerbar'
},
{
  name: "Sweeney's Rooftop Bar (at Hotel Sweeney's)",
  link: "http://hotelsweeneys.com.au/",
  nowtapped: "sweeneysrooftopbar",
  address: "236 Clarence St, Sydney (on the top floor)",
  location: new google.maps.LatLng(-33.87253,151.205949),
  description: "Don't be put off by the most dingy, awful-looking Sydney pub on the ground floor—once you work your way up the complicated sets of stairs to the rooftop you find yourself at a lovely open-air rooftop bar, with around six craft taps that fluctuate between deeply generic and genuinely interesting. It's a diamond in the rough.",
  type: 'innerbar'
},
{
  name: "Redoak Boutique Beer Cafe",
  link: "http://redoak.com.au/",
  nowtapped: "redoakboutiquebeercafe",
  address: "201 Clarence St, Sydney",
  location: new google.maps.LatLng(-33.869716, 151.205236),
  description: "Redoak kinda shit me, but they do have a range of around 15 of their own beers on tap at their bar/restaurant in the city. The beers are reasonable, and there's an occasional standout, but the bar tends to be full of wankers, and the barstaff don't know their beer, and can be a bit full of themselves. I don't frequent the place any more, but it's probably worth a visit nonetheless.",
  type: 'innerbar'
},
{
  name: "Cammeray Craft",
  link: "http://cammeraycraft.com",
  nowtapped: "cammeraycraft",
  address: "504 Miller St, Cammeray",
  location: new google.maps.LatLng(-33.821986,151.210137),
  description: "Probably the premier spot on the North Shore for craft beer, they have six taps of good local beer, and a well-stocked fridge. The food is also excellent, especially in their attached restaurant—although I'm still partial to their maple rib burger at the bar.",
  type: 'outerbar'
},
{
  name: "The Duck Inn Pub & Kitchen",
  link: "http://theduckinnpubandkitchen.com/",
  nowtapped: "theduckinnpubkitchen",
  address: "74 Rose St, Chippendale",
  location: new google.maps.LatLng(-33.887588,151.194688),
  description: "A lovely bar in the leafy back streets of Chippendale, The Duck Inn is a great venue with interesting decor inside (reminiscent of a country cottage) and a sheltered sunken beer garden in the back. Tap list is mostly local (although tending towards the more obvious choices), also with a couple of hand pumps. Food is also great.",
  type: 'outerbar'
},
{
  name: "Kingston Public",
  address: "62 King St, Newtown",
  nowtapped: "kingstonpublicbarandkitchen",
  location: new google.maps.LatLng(-33.892785,151.185728),
  description: 'A really great bar/restaurant, with an attentive and enthusiastic staff, and usually four or so really interesting local beers on tap and a well-selected bottle list. Food is also excellent—it also is one of the few places that does table service by default, which can be a bit weird if you\'re not ready for it. Look for the sign which says "nothing to see here..."',
  type: 'outerbar'
},
{
  name: "Forest Lodge Hotel",
  link: "http://forestlodgehotel.com.au/",
  nowtapped: "forestlodgehotel",
  address: "117 Arundel Street, Forest Lodge",
  location: new google.maps.LatLng(-33.88394,151.184528),
  description: "Solid local pub, with a range of local beers on tap. Popular with locals. Yes, it's a local spot. Definitely has more of a vibe of a suburban pub than the perhaps more hipster locales in the inner city.",
  type: 'outerbar'
},
{
  name: "The Hive Bar",
  link: "http://thehivebar.com.au",
  nowtapped: "thehivebar",
  address: "93 Erskineville Road, Erskineville",
  location: new google.maps.LatLng(-33.899927,151.184779),
  description: "A really cool corridor bar, in the perhaps most uber-hip suberb of Sydney outside the inner radius. The Hive has four taps usually pouring local brews, and a really relaxed atmosphere as you sit in the windows looking out on Erskineville Road.",
  type: 'outerbar'
},
{
  name: "Welcome Hotel",
  link: "http://thewelcomehotel.com",
  nowtapped: "welcomehotel",
  address: "91 Evans St, Rozelle",
  location: new google.maps.LatLng(-33.862721,151.173475),
  description: "A great pub in the back streets of Rozelle, with a good range of taps, and a sprawling range of rooms including some outdoor areas. Always some solid choices on, and they have a good commitment to craft beer.",
  type: 'outerbar'
},
{
  name: "Lord Raglan Hotel",
  link: "http://lordraglan.com.au",
  nowtapped: "lordraglanhotel",
  address: "12 Henderson Road, Alexandria",
  location: new google.maps.LatLng(-33.897016,151.198575),
  description: "Owned by the same guys who run Rocks Brewing and Harts Pub, the Lord Raglan always has a bunch of their beers on, but also make a solid effort at having a range of others as well. It's much like Harts Pub, only in a less-convenient location unless you happen to be based around Alexandria.",
  type: 'outerbar'
},
{
  name: "The Little Guy",
  link: "http://thelittleguy.com.au/",
  nowtapped: "thelittleguy",
  address: "87 Glebe Point Road, Glebe",
  location: new google.maps.LatLng(-33.882559, 151.190425),
  description: "Part of the burgeoning trend of Sydney \"small bars\". Usually has a couple of interesting beers on tap, often including nano-gypsy-inner-Sydney brewers The Grifter and Wayward Brewing, and a decent bottled selection.",
  type: 'outerbar'
},
{
  name: "Doris and Beryl's Bridge Club & Tea House",
  link: "http://dorisandberyl.com",
  address: "530 King St, Newtown",
  location: new google.maps.LatLng(-33.90264,151.17945),
  description: "I'm yet to visit this place, which has a kookiness to it that almost makes me cringe, but early reports are that it's a fun spot with some nice craft beers, and a kookiness that makes people want to cringe. It comes with good pedigree though, being the next venture from the guys who brought us Bitter Phew. So set your expectations high. Probably worth a visit if you're around Newtown anyway.",
  type: 'outerbar'
},
{
  name: "Flat Rock Brew Cafe",
  link: "http://flatrockbrewcafe.com.au/",
  nowtapped: "flatrockbrewcafe",
  address: "290 Willoughby Road, Naremburn",
  location: new google.maps.LatLng(-33.817424,151.201068),
  description: "Another good location on the North Shore, Flat Rock is a chilled venue that brew a range of their own beers, and always have a few other interesting local brews as well. It's a tad out of the way if you're based in the city, but definitely worth a shot if you're passing by.",
  type: 'outerbar'
},
{
  name: "Batch Brewing Co.",
  link: "http://batchbrewingco.com.au/",
  nowtapped: "batchbrewingcompany",
  address: "44 Sydenham Road, Marrickville",
  location: new google.maps.LatLng(-33.91182,151.164829),
  description: "If you're just after Batch's beers, you're likely to find them in any of the bars around this area, but nowhere will have a better range than the source itself. Open for a few hours each day, their on-site bar is powerfully hipster, serving their beers in mason jars—but the beers are good, and it's worth fighting the crowds to see them in situ.",
  type: 'outerbar',
},
{
  name: "Rocks Brewing Co.",
  link: "http://rocksbrewing.com/",
  nowtapped: "rocksbrewingco",
  address: "160 Bourke Road, Alexandria",
  location: new google.maps.LatLng(-33.916241,151.191592),
  description: "Rocks' production brewery is also set up with a solid bar and restaurant, in a semi-industrial area in Alexandria. Don't let that put you off, it's nicely fitted out, including a pleasant outdoor seating area. Mostly Rocks beers on tap, although they often do have a guest or two as well.",
  type: 'outerbar',
},
{
  name: "Modus Operandi Brewing Company",
  link: "http://mobrewing.com.au/",
  nowtapped: "modusoperandibrewingco",
  address: "14 Harkeith St, Mona Vale",
  location: new google.maps.LatLng(-33.675873,151.306215),
  description: "One of the best new breweries to burst onto the Sydney scene recently, M.O. has an excellent range of beers, and the brewery is likely the only place you'll find them all on tap at once. It's quite a hike from the city to Mona Vale, but if you're feeling a sense of wanderlust, you could certainly do worse than wandering this way. They also do growlers, squealers and crowlers for takeaway.",
  type: 'outerbar',
},
{
  name: "Young Henry's",
  link: "http://younghenrys.com.au",
  nowtapped: "younghenrys",
  address: "76 Wilford St, Newtown",
  location: new google.maps.LatLng(-33.898013, 151.174450),
  description: "Cool taproom setting next to the brewery. Their core beers aren't all that exciting, but their specials can be decent enough. I've yet to be truly excited about one of their beers, but they're really passionate about bringing craft beer to inner-Sydney.",
  type: 'outerbar'
},
{
  name: "The Union Hotel",
  nowtapped: "theunionhotel",
  address: "549 King St, Newtown",
  location: new google.maps.LatLng(-33.904006, 151.180238),
  description: "Good solid range of craft beers, and they seem to be pressing to improve more and more. I believe a couple of their taps are still under contract with the large breweries (so you'll still see Carlton Draught). The atmosphere is a bit sterile, and very much like a suburban pub, but if you're in the area, it's still a solid spot to stop.",
  type: 'outerbar'
},
{
  name: "Uncle Hops (at the Bank Hotel)",
  nowtapped: "unclehops",
  address: "324 King St, Newtown",
  location: new google.maps.LatLng(-33.897467,151.179154),
  description: "One of the bars at the Bank Hotel is Uncle Hops, and it's hard to beat the location right in the centre of Newtown. Good range of taps, usually—it's definitely worth stopping in if you're in and about the area in any case.",
  type: 'outerbar'
},
{
  name: "Bloodwood",
  address: "414B King St, Newtown",
  location: new google.maps.LatLng(-33.900050, 151.178218),
  description: "Part bar/part restaurant, the food is good, the beer is well-selected. Tends to be a bit more upmarket than some of the pub locations, and has prices to match.",
  type: 'outerbar'
},
{
  name: "4 Pines",
  link: "http://4pinesbeer.com.au",
  nowtapped: "4pinesbrewingcompany",
  address: "29/43 East Esplanade, Manly",
  location: new google.maps.LatLng(-33.799555,151.285198),
  description: "Decent restaurant/microbrewery with decent if not exceptional beers. 4 Pines often also have a range of special-release beers only for the bar in Manly--these are usually well worth checking out.",
  type: 'outerbar'
},
{
  name: "33 Degrees (at the New Brighton Hotel)",
  link: "http://www.newbrightonhotel.com.au/33_degrees",
  nowtapped: "33degrees",
  address: "71 The Corso, Manly",
  location: new google.maps.LatLng(-33.79742,151.287285),
  description: "The upstairs part of the New Brighton Hotel has a range of craft beers and a good view over Manly's Corso. Manly has fluctuated in its fortunes when it comes to craft beer, but at least there's somewhere like this to complement Four Pines nowadays.",
  type: 'outerbar'
},
{
  name: "The East Village Hotel",
  address: "82 Darling St, Balmain",
  nowtapped: "theeastvillagehotel",
  location: new google.maps.LatLng(-33.857651,151.192499),
  description: "Not to be confused with the East Village Darlinghurst (which has allegedly made a habit of not paying for their beer from small breweries), this is a nice chillaxed neighbourhood pub, a short ferry ride from Pyrmont or Darling Harbour. Solid, expanding range of craft beers on tap, and very good pub food.",
  type: 'outerbar'
},
{
  name: "Nomad Brewing Co",
  address: "5 Sydenham Road, Brookvale",
  link: "http://nomadbrewingco.com.au",
  location: new google.maps.LatLng(-33.763898,151.272389),
  description: "An interesting collaboration between the head brewer of Italy's Birra del Borgo, and the importers who brought in their beers to Australia for the first time, Nomad is now brewing their own beers on Aussie soil. Their tasting room is open in the afternoons, pouring their small range of brews. You can also likely find Nomad beers around the bars in the inner city if the trek to Brookvale is a bit much.",
  type: 'outerbar'
},
{
  name: "Yardarm Taphouse",
  link: "http://www.yardarm.com.au",
  nowtapped: "yardarmtaphouse",
  address: "49-53 North Steyne, Manly",
  location: new google.maps.LatLng(-33.796285,151.287382),
  description: "The third iteration of this bar in as many years, this used to be Murray's at Manly (Murray's Brewing's Sydney outlet), spent a brief time as the misguided \"Rubber Duckie Taphouse\", before becoming the Yardarm. As with anything with such a wild fluctutation in identity, the experience can be a bit fluctuating as well, but if you're heading up to the other spots in Manly as well, this is definitely worth dropping into, especially since this place has the best view of the lot.",
  type: 'outerbar'
},
{
  name: "The Oak Barrel",
  link: "http://oakbarrel.com.au",
  address: "152 Elizabeth St, Sydney",
  location: new google.maps.LatLng(-33.877827,151.20948),
  description: "Used to be exclusively a wine store, it's now pretty much the only place for a good range of craft beer in the inner city. And it makes a good claim to be the best beer store in all of Sydney as well. It's fairly comprehensive, and centrally located. If you're in the city and after takeaway beer, this is the place to go.",
  type: 'innerstore'
},
{
  name: "Beer Cartel",
  link: "http://beercartel.com.au",
  address: "9/87 Reserve Rd, Artarmon (entry on Taylor Lane)",
  location: new google.maps.LatLng(-33.815472,151.187282),
  description: "A specialist beer store, which has set itself up to be the place to buy craft beer in Sydney. It's getting better all the time, and at the moment, probably does come close to having the best range. They also do growler fills. They care about their beer a lot. Occasionally, they have tastings and special events as well.",
  type: 'outerstore'
},
{
  name: "Platinum Liquor",
  link: "http://platinumliquor.blogspot.com/",
  address: "25a Bellevue Rd, Bellevue Hill",
  location: new google.maps.LatLng(-33.886086,151.257258),
  description: "Still probably my favourite beer store in Sydney, these guys were probably the first to really go out of their way to get interesting things. Good range of imports, although genuinely less good on Aussie micros (surprisingly, they're much better on NZ micros), and Adam the beer guy occasionally imports hard-to-find stuff himself rather than going through the big beer importers (so, there are occasionally weird things like Jolly Pumpkin and Russian River in the store). Also Adam is hilarious, and will ridicule you if all you like is IPAs.",
  type: 'outerstore'
},
{
  name: "Camperdown Cellars (Parramatta Rd)",
  link: "http://www.camperdowncellars.com.au/",
  address: "141/140-144 Parramatta Rd, Camperdown",
  location: new google.maps.LatLng(-33.8865329,151.1768741),
  description: "One of the best selections in Sydney nowadays, thanks to a concerted push to get a better beer range in. They also have locations on Kingston Rd (still technically Camperdown, but closer to Stanmore), and Darlinghurst, but this location is the largest.",
  type: 'outerstore'
},
{
  name: "Camperdown Cellars (Kingston Rd)",
  link: "http://www.camperdowncellars.com.au/",
  address: "21 Kingston Rd, Camperdown",
  location: new google.maps.LatLng(-33.892431,151.172281),
  description: "Sister store to the larger (main) branch on Parramatta Rd, this still has an excellent range of beer, and has improved dramatically in the last year or so. I actually like this branch slightly more than the Parramatta Rd one: it's easier to find parking, and it also has a more relaxed, more ad hoc layout that reminds me of Ledger's Liquors in Berkeley, CA. You never quite know what you might find tucked away.",
  type: 'outerstore'
},
{
  name: "Growler Depot (at the Newtown Wine Shop)",
  link: "http://www.facebook.com/growlerdepotnewtown",
  address: "145 King St, Newtown",
  location: new google.maps.LatLng(-33.8934995,151.183497),
  description: "Known best for their impressive growler filling station (which also cleans and sanitises your growlers for you), they also have a solid range of beers to take away as well. Keep a lookout for some of the uber-local breweries like Young Henry's, Shenanigans and Batch.",
  type: 'outerstore'
},
{
  name: "Barny's Fine Wine & Ales",
  link: "http://barnys.com.au/",
  address: "252/741 Botany Road, Rosebery",
  location: new google.maps.LatLng(-33.914828,151.201439),
  description: "A good range of beers, they'll probably always have something you haven't tried. Perhaps not as comprehensive as some others in terms of new releases, or the top beers around the place (for instance, they seem rarely to have much in the way of Scandinavian breweries), but you'll certainly find interesting things when you pop in.",
  type: 'outerstore'
},
{
  name: "Amatos Liquor Mart",
  link: "",
  address: "267 Norton St, Leichhardt (corner City West Link)",
  location: new google.maps.LatLng(-33.875482,151.156522),
  description: "Used to be one of the great beer shops in Sydney, the range has dwindled somewhat recently, and stores with better ranges have cropped up (see the above). Still, they have a decent-sized walk-in beer fridge, which they still keep stocked. Some Aussie micros, but mainly European/UK imports, almost all available as single bottles. Nothing all that exciting, but I'll usually go and find something I haven't tried.",
  type: 'outerstore'
},
{
  name: "Riverside Brewery",
  link: "http://www.riversidebrewing.com.au",
  address: "Unit 3, 2 North Rocks Road, North Parramatta",
  location: new google.maps.LatLng(-33.7930732,151.0011442),
  description: "These guys just do tastings and growler fills right now (check their website for opening hours), but they're included here because they're certainly one of the best breweries operating out of Sydney at the moment. It's probably easier to find their range somewhere closer to the city, though, unless you're already based out west.",
  type: 'outerstore'
}
];
