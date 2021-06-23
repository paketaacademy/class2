const factoryNews = (array, div) => {
    let elementNews = []
    for (let i = 0; i < array.length; i++) {
        elementNews.push(`
            <div>
                <h3>${array[i].title}</h3>
                <img src="http://lorempixel.com/214/143/" alt="Each of the news">
                <p>${array[i].desc}</p>
            </div>
        `)
    }
    div.innerHTML = elementNews
}

const NEWS = [
    {
        title: "World News",
        desc: "Covid Surge in Africa Raises Fears of a Calamity Like India’s I’ve Cracked Zodiac, a French Engineer Says. Online Sleuths Are Skeptical. They Voted for Brexit, but not the Giant Truck Park That Came With It"
    },
    {
        title: "U.S News",
        desc: "She Fought to Reopen Schools, Becoming a Hero and a Villain California Has a Plan to Pay the Back Rent for Low-Income Tenants. All of It. Many Parts of the U.S. Needed Persuading to Get Vaccinated. Not South Texas."
    },
    {
        title: "U.S. Politics",
        desc: "White House Unveils Strategy to Combat Domestic Extremism How an Anti-Corruption Bill Became a Showdown on Democracy The White House publicly acknowledges the U.S. is likely to miss Biden’s July 4 vaccination goal."
    },
    {
        title: "New York",
        desc: "Live Updates: Voters Turn Out Across N.Y.C. in Pivotal Race for Mayor New Yorkers Vote for Mayor in Race Tinged With Acrimony and Uncertainty Connecticut Legalizes Recreational Marijuana, with Sales Aimed for 2022"
    },
    {
        title: "Business",
        desc: "Banks Slowly Offer Alternatives to Overdraft Fees, a Bane of Struggling Spenders Mobile Home Owners Fear Evictions as Pandemic Protections End Google Executives See Cracks in Their Company’s Success"
    },
    {
        title: "Technology",
        desc: "Google’s internet advertising dominance draws a fresh E.U. antitrust inquiry. Google Executives See Cracks in Their Company’s Success Inside the ‘Deadly Serious’ World of E-Sports in South Korea"
    },
    {
        title: "Science",
        desc: "When an Eel Climbs a Ramp to Eat Squid From a Clamp, That’s a Moray Why Geology Is Our Destiny How Glowing Bacteria in the Dirt May One Day Save Lives"
    },
    {
        title: "Sports",
        desc: "‘Glove, Hat and Belt’: M.L.B. Begins a New Era of Enforcement China’s Sun Yang Barred for Four Years Players of Asian Descent on the L.P.G.A. Tour Lift Silence on Racism and Sexism"
    },
    {
        title: "Obituaries",
        desc: "Sylvia Deutsch, a Force in New York City Land Use, Dies at 96 Mark Peel, Who Helped Forge a New Culinary Path, Dies at 66 Consuewella Africa, 67, Dies; Lost Two Daughters in MOVE Siege"
    },
    {
        title: "The Upshot",
        desc: "New Drug Could Cost the Government as Much as It Spends on NASA Medicaid Enrollment Surpassed 80 Million, a Record, During the Pandemic The Pandemic Stimulus Was Front-Loaded. That Could Mean a Bumpy Year."
    },
    {
        title: "Climate and Environment",
        desc: "Against Expectations, Southwestern Summers Are Getting Even Drier U.N. Says Great Barrier Reef Is ‘in Danger.’ Australia Bitterly Disagrees. Climate Change Batters the West Before Summer Even Begins"
    },
    {
        title: "Education",
        desc: "Does It Hurt Children to Measure Pandemic Learning Loss? Online Schools Are Here to Stay, Even After the Pandemic Why Students Are Logging In to Class From 7,000 Miles Away"
    },
    {
        title: "Health",
        desc: "Many Alzheimer’s Experts Say Use of Aduhelm Should Be Sharply Limited Medicaid Enrollment Surpassed 80 Million, a Record, During the Pandemic Wondering if the Vaccine Worked? Get the Right Test, at the Right Time"
    },
    {
        title: "Reader Center",
        desc: "Behind One Pulitzer, Hundreds of Hands I’ve Recovered From Long Covid. I’m One of the Lucky Ones. A Dad and an Audience of One"
    }
]

const OPINION = [
    {
        title: "Opinion",
        desc: "The Hard-Liners Won in Iran. That’s Not All Bad News. Miscarriages Are Awful, and Abortion Politics Make Them Worse The Bishops, Biden and the Brave New World"
    },
    {
        title: "Op-Ed Columnists",
        desc: "The Bishops, Biden and the Brave New World Sarah Schulman’s Radical Approach to Conflict, Communication and Change Only the Women Can Save Us Now, New York"
    },
    {
        title: "Editorials",
        desc: "The Two Men Blocking Military Sexual Assault Reform One Way Forward on Iran: A Nuclear-Weapons-Free Persian Gulf Don’t Overthink Ranked-Choice Voting, New York City"
    },
    {
        title: "Guest Essays",
        desc: "Miscarriages Are Awful, and Abortion Politics Make Them Worse The Hard-Liners Won in Iran. That’s Not All Bad News. Transcript: Ezra Klein Interviews Sarah Schulman"
    },
    {
        title: "Sunday Review | Opinion",
        desc: "The Strange Death of Liberal Russophobia The Two Men Blocking Military Sexual Assault Reform A 14-Year-Old Bride, Wed to Her Rapist, Playing on a Jungle Gym"
    }
]

const ARTS = [
    {
        title: "Arts",
        desc: "Britney Spears Quietly Pushed for Years to End Her Conservatorship Los Angeles Has a Housing Crisis. Can Design Help? How Do You Move a 30-Ton Diego Rivera Fresco? Very Carefully."
    },
    {
        title: "Art and Design",
        desc: "As Money Launderers Buy Dalís, U.S. Looks at Lifting the Veil on Art Sales The Shakers Are Movers, Too The Enslaved Artist Whose Pottery Was an Act of Resistance"
    },
    {
        title: "Movies",
        desc: "‘In the Heights’ and Colorism: What Is Lost When Afro-Latinos Are Erased With ‘In the Heights,’ Jimmy Smits Sings a Little but Gave It a Lot ‘The Hunchback of Notre Dame’ at 25: ‘The Most R-Rated G You Will Ever See’"
    },
    {
        title: "Television",
        desc: "‘Inside No. 9’ Returns With More Cunning Puzzles The 21 Best TV Comedies of the 21st Century (So Far) Review: ‘Evil’ Is Good and It’s Back for a Second Satanic Season"
    },
    {
        title: "Music",
        desc: "50 Reasons to Love Joni Mitchell's ‘Blue’ Britney Spears Quietly Pushed for Years to End Her Conservatorship An Orchestra Veteran on Music’s Post-Pandemic Future"
    },
    {
        title: "Theater",
        desc: "A Complicated Collaboration for a New ‘Enemy of the People’ Theater Heads North, and in Every Direction at Once At a Queer Theater Festival, the Plays Are Brazenly Personal"
    },
    {
        title: "Dance",
        desc: "Five Pioneering Black Ballerinas: ‘We Have to Have a Voice’ ‘In the Heights,’ Where the Streets Explode With Dance A Hip-Hop Dance Crew’s Frabjous Reign in Las Vegas"
    },
    {
        title: "Books",
        desc: "Touring American Pop Music by Way of the Writers Who Have Addressed It Yes, No, Maybe So: A Generation of Thinkers Grapples With Notions of Consent Graham Norton Comes Around"
    },
    {
        title: "Book Review",
        desc: "Meet Sydney Taylor, Unsung Creator of the All-of-a-Kind Family Touring American Pop Music by Way of the Writers Who Have Addressed It Brandon Taylor’s ‘Filthy Animals’ Is a Study in Rogue Appetites"
    }
]

const LIVING = [
    {
        title: "Style",
        desc: "Naomi Osaka and the Language of Fame Symone Is a Love Letter to Blackness and Queerness The End of the Wonder Rug"
    },
    {
        title: "Food",
        desc: "More Than ‘Just Takeout’ French Fries and Chapli Kebabs, Hot From the Skillet Grocery-to-Table Is a Challenge for Restaurants in the Pandemic"
    },
    {
        title: "Well",
        desc: "The Secrets of ‘Cognitive Super-Agers’ Morning People May Be at Lower Risk of Depression Than Night Owls New Homes, Pets and Dreams: Big Pandemic Changes"
    },
    {
        title: "The New York Times Magazine",
        desc: "What if American Democracy Fails the Climate Crisis? The Best Way to Clean Your Ears: With a Spoon Should I Hang Out With Someone Whose Political Views I Hate?"
    },
    {
        title: "T Magazine",
        desc: "Lucy Dacus Takes Confessional Songwriting to a New Level When Bots and Antibodies Are Art Materials Brigid Berlin, Andy Warhol’s Most Enduring Friend"
    },
    {
        title: "Travel",
        desc: "It’s Summer in the Ski Towns, 2.0 Touring Alaska in an R.V. Five Things to Know if You’re Road-Tripping This Summer"
    },
    {
        title: "Love",
        desc: "This Season’s Wedding Crashers: Cicadas Finding Light Together After a ‘Very Dark Place’ My 70-Year-Old Father Joined Tinder"
    },
    {
        title: "Real Estate",
        desc: "Three Hollywood Stars Recast Their Lives Deep in the Heart of Texas Why the Best Gardens Have Something Extra Getting Married and Leaving a Roommate Behind"
    }
]

let news = document.querySelector('#news')

factoryNews(NEWS, news)