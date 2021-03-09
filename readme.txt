Zadanie ma na celu sprawdzenie:
- umiejetnosci samodzielnej konfiguracji srodowiska
- umiejetnosci stworzenia podstawowego endpointa w rails (na podstawie juz istniejacego)
- umiejetnosci stworzenia widoku crud w react (na podstawie juz istniejacego)
- umiejetnosci rozwiazywania bugow
- znajomosci react, rails, redux

do odpalenia backendu:
- nalezy zainstalowac odpowiednia wersje railsow
- zainstalowac mysql
- zmienic konfiguracje w pliku database.yml
- zainstalowac dependencies z gemfile przy uzyciu bundlera
- odpalic rake db setup i seed
- jezeli wszystko poszlo pomyslnie wystarczy odpalic serwer: rails server

do odpalenia frontendu:
- instalujemy node i npm (ja uzywam node v8.16.1 i npm 6.4.1)
- instalujemy dependencies z package.json
- odpalamy npm run start

do zrobienia:
- chcemy miec widok listy certyfikatow (czyli kursow jakie ukonczyl dany user) z mozliwoscia dodawania edycji usuwania (crud)
- certyfikat ma miec pola - nazwa (text), opis (textarea) i user(select)
- bug: po zalogowaniu powinnismy wyladowac na stronie userow (obecnie pokazywana jest strona logowania z gornym menu)
- dodanie menu itema "Terms" ktory po kliknieciu otworzy modal z regulaminem (przy uzyciu redux)