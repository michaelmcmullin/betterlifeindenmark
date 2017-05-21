# Better Life In Denmark

A number of graphs have popped up using data from the [OECD Better Life
Initiative data, 2016](www.oecd.org/statistics/Better-Life-Initiative-2016-country-notes-data.xlsx).

The World Economic Forum [tweeted one such graph](https://twitter.com/wef/status/842782743637495808)
which was picked up by [viz.wtf](http://viz.wtf/). Turns out, they weren't too
impressed:

> This chart has everything: For the first - it is sort of a pie chart, that
shows how many indicators feed into each of the categories that make up the
overall score. The pie chart is then overlaid with a sort of a radial bar chart
for each of the factors. A true WTFViz :)

Ouch! Personally, I didn't think it was too bad. Maybe I found the content
interesting enough that the visualization drew me in. However, there were a
few things that seemed odd (one of their strengths is homicide apparently!)

## Preparing the data
I'm not sure if I can do better, but I'll give it a go. I went back to the
original OECD data, and found that each category was using different units. The
first thing I did was normalize all the data between 0 and 100, and then
calculate both the OECD average and Denmark's results on this new scale.

Where necessary, I changed the headings to better reflect the original data.
The previous example given (homicides) was left unchanged, because the original
data reflects the actual number of homicides, not how well a country is doing
tackling the problem as the WEF graph showed.

## Displaying the graph
The chart uses D3js and Dimple to display the results in a browser. You can see
the current version of [Denmark's Standard of Living 2016 here](https://mrmcnerd.github.io/betterlifeindenmark/).