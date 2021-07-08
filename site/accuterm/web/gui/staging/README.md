# AccuTerm.IO GUI - Staging

<PageHeader />

## Release Notes - July 8th, 2021  
- Controls
   - Edit properties completed
   - Form properties completed
   - Command properties completed
   - Menu properties completed
   - Default icons added
   - Client application grid cleanup
   - Default images icons completed
   - Menu toolbar properties completed
   - Grid events completed
   - Icon support added for grid, tree, list, edit, buttons
   - Grid dropdown support added
- Architecture  
   - Activate, focus, and zIndex complete
   - Hotkeys funtional in apps as well as forms
   - Initial implementation of MDI
- Service
   - Continued work on SetProp and GetProp service
   - Delete service completed
   - Added ability to host custom images

## Release Notes - April 23rd, 2021  
- Controls
   - Continued form and gui work: gui (sdi and mdi) and forms (dialog and others)
   - Grid and List continued work
- Architecture  
   - Organize gui store for readability 
   - Implement focus and initial keyboard accelerators
- Service
   - Integrate focus and activate into appropriate methods

## Release Notes - March 29th, 2021  
- Controls
   - Continued work: menu, popup menu, toolbar, status bar
   - Grid and List continued work
- Architecture  
   - Gui App/Form rendering with menu, toolbar and status bar  
   - Add initial draggable form  
   - Add Message box and framework for other dialog boxes
- Service
   - Message Box completion

## Release Notes - March 15th, 2021  
- Controls
   - Completed: tab, tab group
   - 60% Complete: menu, popup menu, toolbar, status bar
   - Grid and List continued work
- Architecture  
   - Gui/Form Layering ability with z-index 
- Service
   - Methods completion: activate

## Release Notes - February 26th, 2021  
- Controls
   - Completed: browser
   - Grid and List continued work
- Architecture  
   - Update grid table types
- Service
   - Grid load time efficiency testing 

## Release Notes - February 15th, 2021  

- Controls
   - Completed: timer, guage, and browser
   - Grid, List and browser continued work
- Architecture  
   - Update delete service to reflect store architecture changes
- Service
   - Get Props command finished and continued refactor with Methods work 
   - Set Props command finished and continued refactor with Methods work
   - Methods 80% complete

## Release Notes - February 1st, 2021  

- Controls
   - Completed: options, picture, and frame
   - Grid, browser, guage and tabs continued work
   - Add icon support
- Architecture  
   - Update store architecture to miantain reactivity when handling nested objects and arrays
   - Refactor to allow for Nth number of children controls and implementation
- Service
   - Get Props command close to finished
   - Refactor utility functions for working with store
   
## Release Notes - January 19th, 2021  

- Controls
   - Completed: edit, checkbox, label, button and tree
   - Grid continued work
- Architecture 
   - Add more intricate typing for control, form and gui objects
   - Refactor gpScale to conform to desktop version (applying to gui app and passing through inheritance)
- Service
   - Adjust scaling to adhere to sepearte defaults
   - Data conversion from pick into strictly typed typescript
   - Refactor code to conform with stricter typing and data converstions

## Release Notes - December 23th, 2020 

- Controls
   - Tree properties and events 70% integrated
   - List (Single, Multi, Checkboxes, Dropdown) continued work 
   - Checkbox events continued work 
   - Command/Button continued work
- Architecture 
   - Add service helper functions to locate properties and parent properties effeciently 
- Service
   - Added default properties for gui objects 
   - Added gui object inheritance from parent 
   - Initial gcGetProp working
   - More rigorous error checking
   - Fixed form closure issue
  
## Release Notes - December 7th, 2020 

- Initial event handling added to all controls
- Controls - Continued events integration:
   - Specialized event handling added to Option control
- Controls - Continued property integration for all controls
- Architecture - Add special type handling for controls (grid, list, etc), which pass data as arrays and multi-dimensional arrays. (via setprops)
- Controls - Initial property integration for:
   - Tree 
   - Picture, Frame, Tab and Tab Group
   - Gauge, Timer, Browser

## Release Notes - November 24th, 2020   
  
- Initial event integration for Edit control
- Controls - Continued property integration: 
   - Edit, Edit Password and Edit Multiline
   - Grid and Grid Editable
   - List, List Multisel, Drop Down List and Checked List
- Architecture - Controls now utilize Vue's computed, as opposed to data
   *Allows for guis/forms/controls to be seamlessly updated (via setprops, method, etc...) utilizing the power of vuex*
- Architecture - Add simpler identifier to each GUI Object and update services accordingly
   *Allows for guis/forms/controls to be located in nested array with ease*
- Architecture - Created simpler style functions to handle specfic style/css needs within each component
- Controls - Integrate new style functions into all controls
- Controls - Initial property integration for:
   - Label
   - Options
   - Checkbox (radio buttons)

## Release Notes - November 13th, 2020   
  
- Gui/Form/Control merger of similar components, e.g. 
   - Guis: SDI and MDI
   - Forms: Form Sizable, Form Fixed, SDI Sizable and SDI Fixed
   - Edit, Edit Password and Edit Multiline
   - Grid and Grid Editable
   - List, List Multisel, Drop Down List and Checked List
- Add initial support for parent controls: Picture, Tab, Tab group and Frame
- Continued development on controls: Edit, Grid, Checkbox and List
- Continued work Gui command handler service
- Implement working gui/form close process with close button 
- Architecture - Gui Object property refactor   
   *Allows for guis/forms/controls to easily integrate properties and have default values (helps prevent errors)*
- Add initial menu gui objects: Menu, Popup, Toolbar, Statusbar 
- Add support for internal gui objects

<PageFooter />