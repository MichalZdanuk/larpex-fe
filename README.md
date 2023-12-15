# LARPEX
Projekt zrealizowany w dużym zespole składającym się z 15 osób. Wydzielono zespoł architektów (2), dwa zespoły back-end (5), trzy zespoły front-end (6) oraz zespoł bazodanowy (2). Projekt polegał na przesymulowaniu dwóch iteracji projektu w ramach, których należało wytworzyć odpowiednie modele architketoniczne, a następnie zgodnie z nimi zaimplementować zadaną funkcjonalność systemu.

## Organizacja pracy
W projekcie pełniłem rolę głównego front-end developera, odpowiedzialnego za implementację interfejsu graficznego, konfigurację projektu oraz komunikację i ustalanie szczegółów z architektami. Moje zadania obejmowały również koordynację działań zespołu oraz zapewnienie spójności między warstwą graficzną a strukturą architektoniczną projektu.

Rozpiska spotkań projektowych:
1. **Organizacja** - przedstawienie regulaminu i harmonogramu, podział na grupy, wręczenie specyfikacji projektu
2. **Zaplanowanie projektu.** - omówienie specyfikacji projektu, Scrum-Poker
3. **Iteracja I: rozpoczęcie** - omówienie przyjętego modelu architektonicznego, wybór technologii przez zespoły developerskie
4. **Iteracja I: wypracowywanie rozwiązania** - przedstawienie diagramów klas do wybranych przypadków użycia 
5. **Iteracja I: weryfikacja projektu** - przedstawienie diagramów sekwencji do wybranych przypadków użycia
6. **Iteracja I: weryfikacja implementacji** - demonstracja postępów implementacji oraz zgodności z projektem architektonicznym
7. **Iteracja I: wstępna prezentacja systemu** - prezentacja aktualnego stanu implementacji systemu
8. **Iteracja I: testy akceptacyjne systemu** - wykonanie testów systemu zgodnie ze scenariuszami
9. **Iteracja II: rozpoczęcie** - wybór przypadków użycia do realizacji w II sprincie
10. **Iteracja II: wypracowywanie rozwiązania** - przedstawienie diagramów klas do wybranych przypadków użycia 
11. **Iteracja II: weryfikacja projektu** - przedstawienie diagramów sekwencji do wybranych przypadków użycia
12. **Iteracja II: weryfikacja implementacji** - demonstracja postępów implementacji oraz zgodności z projektem architektonicznym
13. **Iteracja II: wstępna prezentacja systemu** - prezentacja aktualnego stanu implementacji systemu
14. **Testy akceptacyjne i końcowa prezentacja systemu** - wykonanie testów całęgo systemu zgodnie ze scenariuszami
15. **Podsumowanie** - podsumowanie prac

## Case Study Projektu
*LARPEX* to system służący do optymalizacji procesu przygotowania, organizacji oraz przeprowadzania gier typu LARP. Aplikacja umożliwia definiowanie szablonów gier, ogłaszanie wydarzeń oraz uruchamianie na nie zapisów, opłatę organizacji wydarzeń oraz przeprowadzenie gry. Użytkownicy mają możliwość zapisywać się na wybrane wydarzenia oraz kontrolować przebieg gier przy użyciu własnych smartphone'ów.

## Stos technologiczny
* BackEnd: .NET Web API
* FrontEnd: Vite, React (axios, react-router, bootstrap)
* Baza danych: PostgreSQL

## Zakres zrealizowanego systemu
W ramach projektu przeprowadzono symulację dwóch iteracji projektu. Jest to krótki okres, niemniej jednak pomyślnie zaimplementowano wybranych, dziesięc przypadków użycia. Poniżej przedstawiona jest lista zrealizowanych przypadków użycia (**pogrubione przypadki zostały zrealizowane przeze mnie**):

Sprint I:
- [x] **Dokonanie płatności**
- [x] Utworzenie wydarzenia
- [x] Zmiana ustawień wydarzenia 
- [x] Wyświetlenie panelu organizatora wydarzeń
Sprint II:
- [x] **Wyświetlenie listy propozycji gier**
- [x] **Wydanie werdyktu na temat propozycji gry**
- [x] Wprowadzenie poprawek do gry
- [x] Wyświetlenie kreatora gry
- [x] Przesłanie propozycji gry
- [x] Modyfikacja gry
## Modele architektoniczne
Przedstawiam diagramy klas i sekwencji zaprojektowane zgodnie z językiem UML do przełożenia wymagań na implementację przypadku użycia *Dokonanie płatności*:

* diagram klas: 

![platnosc_diagram_klas](https://github.com/MichalZdanuk/larpex-fe/assets/76063659/62a0b3ea-901f-409f-b550-918eede8e611)

* diagram sekwencji:

![platnosc_diagram_sekwencji](https://github.com/MichalZdanuk/larpex-fe/assets/76063659/3c94be79-e00d-490e-8624-34b21e2f65fa)

## Demo systemu
Poniżej jako przykład przedstawiono realizację przypadków użycia *Wyświetlenie listy propozycji gier* i *Wydanie werdyktu na temat propozycji gry*:

![uc_sprintII](https://github.com/MichalZdanuk/larpex-fe/assets/76063659/3e8975ec-851f-4732-9d01-3f33c814cc3c)


## Warstwa BackEnd
Warstwa backend została zrealizowana przez dwa zespoły, repozytorium z kodem dostępne pod linkiem: https://github.com/PO-2023Z/larpex-be
