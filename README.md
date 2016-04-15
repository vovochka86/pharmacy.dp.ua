# pharmacy.dp.ua
Drug searchengine SPA
Angular "from the box" badly serves large JSON files. After fetching 200-300 positions Mozilla/Chrome freezes out.
Surely I'm familiar with server side pagination, BUT what if you want to serve JSON file with 1000 positions
or 10k positions or 30k positions???
It's catasrophe to search data through 500 chunks that contains 100 positions.

But with the help of streaming I'm able to solve this obstacle.
Thig program are able to search in 50mb JSON file with out frezing, hanging up and other freaky things.

