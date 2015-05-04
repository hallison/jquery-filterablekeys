SOURCE = jquery.filterablekeys

.SUFFIXES: .js .min.js

.js.min.js:
	curl -X POST -s --data-urlencode 'input@$(<)' http://javascript-minifier.com/raw > $(@)

dist: $(SOURCE).min.js

clean:
	rm -f $(SOURCE).min.js
