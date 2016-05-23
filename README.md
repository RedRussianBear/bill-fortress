# Bill Fortress

## Minimal Viable Product
- Simple, functional overworld depicting the congressional process
- Functional Debate mode
- Meme-tastic soundtrack

## Game Structure
- Begins with character creation
- Three main sections:
  - First Legislative House
  - Second Legislative House
  - Conference & Approval
- The two legislative sections are split between Committee and Floor section
- One can choose what house to originate in, unless one chose the "Revenue Bill" option, in which case one must start in the House
- Each individual house section culminates in a horde battle called "Final Vote"
- The final boss is the President

## Character Creation
- Fields to determine: 
- Bill name
- Bill type:
  - Resolution
  - Criminal Statute
  - Revenue Bill
  - Mandate
  - Change to Bureaucratic Structure
  - Subsidy
- People it benefits, people it hurts
- What Congress the bill is being proposed in (with a list of historical presets)
- What party the bill sponsor is from

## Gameplay
- Debate is entered when the bill confronts a member of its opposition
- Debate is in the form of [combat form]
- If the bill loses all of its health, the game ends
- If a bill wins debate, it loses Original Text Percentage proportional to how much damage it took in Debate

## Character Progression
- Endorsements grant better stats and new abilities in Debate
- Endorsements can either be purchased with Campaign Contributions, or exchanged for Amendment, which lower Original Text Percentage

## GUI
- Overall wrapper GUI class
- Inside a GUI, one or more Components. This can be a menu, a bar, etc
- A component contains buttons, fields, displays
- Buttons are assigned a function to check if the button is active and a function to execute on press
- Rendering of GUI is done recursively, first with the parent being drawn, then all of the children