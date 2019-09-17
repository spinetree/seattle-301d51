Pair Programming
--------------------
- Solve problems not faster, but higher quality
- Increase focus because someone's watching
- See how someone else does the thing, learn their tricks
- Improve/drill ability to explain, communication, conflict resolution (social skills) 
- Get skillset ready for work environment - think about what works with a team, not just in isolation 

jQuery, and the DOM
--------------------
Useful jQuery events:

DOMContentLoaded - variation on document ready - sometimes works faster. Doesn't wait for JS files to do their DOM manipulation
hashchange - change to the #variable piece
beforeunload - before user leaves the page - can be used for evil

jQuery basic idea:
--------------------
- select elements
- perform operations on them
- handle events

Syntax:
---------------
$(getSomeDOMElement).doAThingToIt().andMaybeSomeMoreThings(withArguments)

Benefits:
-----
- more powerful selectors > more ways to target something
- built-in methods
- shorter syntax in many cases
- animations!
- easy, powerful getting of properties of dom elements (was more a thing before es6)