
>[!#important] ## 5.1 - Electric Fields
### Electric Charges
- Charge is a ==scalar property== of matter that causes matter to experience ==force in an electromagnetic field==. 
- Uncharged (neutral) objects have a ==net zero== (equal) amount of positive and negative charge within.
- Charged objects have a ==net amount== of positive or negative charge within.
- Positive charges attract negative charges and repel positive charges, and vice versa.
- Charge is ==quantized== (has a quantity) and ==conserved== (not destroyed or created).
### Electric Forces
- There is a ==force== that exists ==between electric charges==.
- The ==Coulomb==, $C$ measures the ==unit of electric charge==.
- The ==force== between two charged objects is ==proportional== to the product of the charge on each object, $q_{1}$ and $q_{2}$.
$$F_{electric}\propto q_{1}q_{2}$$
- Furthermore, Coulomb found that $F_{electric}$ also depended on the ==separation== ($r$) of the two charged objects, and that it was proportional to $r^2$.
- Thus, Coulomb's law is derived.
	- Coulomb's law states that the ==magnitude of electrostatic force== of attraction/repulsion ==between two point charges== is directly ==proportional== to the product of the ==magnitudes of charges== and ==inversely proportional== to the ==square of the distance== between them.
	- $$F_{electric}=k\left( \frac{q_{1}q_{2}}{r^2} \right)$$
	- Where  $q_{1}$ and $q_{2}$ are magnitudes of charges, $r$ is their separation, and $k$ is the permittivity constant.
	- Mathematically, the resulting positive value of the electric force is repulsive, and negative force is attractive.
	- Electric force has a unit of Coulombs ($C$).
- ==Different objects have different permittivities==, which affect the forces between the two charges. 
- In a typical vacuum, the definition of electric force is as follows:
	- $$F_{electric}=\left( \frac{q_{1}q_{2}}{4 \pi \epsilon_{0} lr^2} \right)$$
	- Where $\epsilon_{0}$ is the permittivity of free space.
- Coulomb's law only applies to a ==pair of point charges,== and cannot be used to calculate the force between charges on electric conductors, or other objects.
	- Charge must be ==uniformly distributed== in amount or spatially to specify a separation value.
	- However, if the shapes are smaller than their separation, Coulomb's law can be applied, as the objects act as point charges.
### Electric Fields
- Michael Faraday first proposed the concept of a field.
	- There is a field of force spread throughout all space by one object, in which a second object experienced force based on its location.
	- The force on the second object arises from the properties of the field.
- An electric field is a ==vector field== that gives each point in space a Coulomb ==force== that would be experienced ==per unit of electric charge==, by a test charge at that point.
- The electric field strength is the magnitude of that force.
 $$E=\frac{F_{electric}}{q}$$
- Where $E$ is the electric field, $F_{electric}$ is the electrical force, and $q$ is a positive test charge placed there.
- The units of electric field strength are ==newtons per coulomb==; $N\cdot C^-1$
- This brings about the equation for force of any charge in an electric field:
$$F_{electric}=qE$$
- The ==electric field of a point charge== is:
$$E=\frac{Q}{4\pi\epsilon_{0}r^2}$$
### Electric Field Lines
- Electric field lines are drawn relative to the movement of a positive test charge in an electric field.
	- For the field emitted by a positive point charge, lines with arrows away from the charge will be drawn.
	- The inverse is true for negative point charges.
	- ![[Positive-Field.png|200]]         ![[Negative-Field.png|200]]
- Electric field lines have the following properties:
	- They begin on positive charges and end on negative charges.
	- They never cross (at any given point there is only one value for the electric field).
	- They indicate electric field direction by a tangent to the field lines.
	- Where field lines are:
		- closely spaced, the field is strong and conversely when the field is distantly spaced the field is weak
		- parallel and equally spaced, the field is uniform.
- Equipotential lines are dashed lines on fields.
	- They are perpendicular to electric field lines.
	- They represent a line where if a charge is moved about it, no work is done.
	- ![[Equipotential Field Lines.png|200]]

>[!important] Drawing Electric Fields
>###### **Electric field lines**:
>- Use smooth lines starting at positive charges and ending at negative charges (orient the arrows correctly).
>- Closely spaced lines indicate large electric fields.
>- Lines should never cross.
>###### **Equipotentials**:
>- Use smooth dashed lines and closed loops in the drawing space (no arrows).
>- Closely-spaced lines indicate rapid change of potential with displacement (large electric fields).
>- Lines should never cross.
>###### **Both**:
>- Electric field lines and equipotential lines are always perpendicular where they cross.
>- Areas of closely-spaced lines in one location match areas of closely-spaced lines in the other

### Electric Potential
- When a charged object is ==moved== in an electric field, the field ==does work== on the object.
- ==Work changes the potential energy of an object.==
- The force exerted by the field ==always tends towards lower energy== and will act to ==reduce potential energy==.
- ![[Test Charge in Electric Field.png|200]]
- As a point charge $q$ moves closer to $Q$, potential energy increases.
- Thus, ==zero potential energy is set at a location infinitely far away==, so electric potential energy depends on the product of charges $(Qq)$ and inversely with separation distance $(r)$.
- For work done by an external force, on a point charge $q$ in an electric field:
	- Work done to move a ==positive charge inwards is positive==, because potential energy increases as repulsion gets stronger.
	- Work done to move a ==negative charge inwards is negative==, because potential energy decreases as repulsion gets stronger.
- Electric potential is represented by the symbol $V$.
	- It is the ==electrical potential energy per unit charge== at a particular point in an electric field.
	- It has the ==value== of ==$V=\frac{W}{q}$==, where $W$ is the work done to bring a test charge $q$ from infinity to a particular point.
	- Electrical potential, following this definition, is zero at infinity.
	- Electric potential is a ==scalar==.
	- Its ==units== are $J\cdot C^{-1}$ — this describes the energy 1$C$ of charge would possess at a location on an electric field.
- Potential difference is the ==difference of electric potentials at two different points==.
	- When work ($W_{A\ to\ B}$) is done to move a test charge $q$ from point A to point B, the potential differences can be expressed as $V_{A\ to\ B}=V_{B}-V_{A}=\frac{W_{A\ to\ B}}{q}$
	- When $V_{A\ to\ B}=0$, the points are ==equipotentials==, and no work is done to move the points.
- To describe an electric field:
	1. Electric field view:
		- Provide vector values of the field $E$.
		- Calculate the force on any charge, $qE$.
		- Draw electric field lines.
	2. Potential field view:
		- Provide scalar values of the field,  $V$.
		- Calculate the potential energy at any point, $qV$.
		- Draw equipotential lines/surfaces.
- Special Unit: The Electron Volt $eV$
	- amount of energy needed to move an electron through a potential difference of one volt
	- $1eV=1.60\cdot10^{-19} J$

>[!caution]
>Electric potential energy is the potential energy of a charge in an electric field.
>Electric potential is the same, but per charge ($V=\frac{W}{q}$), and is represented by $V$ because it is measured in volts.
>Electric potential difference is the voltage, as it is difference between electric potential at two points.

### Electric Current
- An ==electrical current== is the ==flow of electric charge==.
- Particles that ==move and have a charge== are called ==charge carriers==. 
- An ==electric current== $I$ is the ==rate of flow of charge== past a ==given cross-section== of material or space. $$I=\frac{\Delta q}{\Delta t}$$
- Where $\Delta q$ is the net charge passing through a cross-sectional area throughout a time interval $\Delta t$.
- The net charge passing a point ==depends== on the charge held by ==charge carriers== and their ==rate of flow==.
- The SI unit of current is the ==ampere==, $A$.
- The ampere is a unit defined as the current that produces a force of $2\cdot{10}^{-7} Nm^{-1}$ between two infinitely long parallel conductors of negligible cross-sectional area, separated by $1m$ in a vacuum.
	- The Coulomb is defined in terms of this: $1 coulomb = 1 A\cdot s$
- When electric potential difference, $V_{AB}$ exists between two points, an electric field, $E$ is established.
- A conductor is a material that allows mobile charge carriers to move within it with a significant net translational motion when an electrical potential difference is applied across it.
- Conventional current is the direction which positive charges flow.
	- ==Unless directed otherwise, use this on tests.==
- ![[Conventional Current Flow.png|200]]
- Electron current is the direction which negative charges (electrons) flow.
### Electrical Currents in Metals
- In metals, free electrons are the mechanisms for charge transfer (ie. they are charge carriers).
- Current is the same for all parts of a wire.
- In classical physics, electrons in solids can have any energy (continuous values) but quantum theory predicts that only discrete values are allowed.
- In metals, lattice atoms interact to spread energy values into bands, and when there is sufficient thermal energy, electrons will move to higher energy states (conduction bands) where they acquire *drift* velocity providing net transfer of charge.
- In any metal, there is normally random motion of mobile electrons and vibration of lattice atoms that constitute the kinetic and potential energy we call internal energy.
- The application of an electric potential difference between two points in a metal creates an electric field in the metal, causing:
	1. Mobile electrons to be accelerated by electric forces until a collision occurs with lattice atoms.
	2. Electric potential energy of an electron is then converted into kinetic energy during acceleration, then into random kinetic and potential energy of the vibrating lattice.
	3. Force coupling between all lattice atoms distributes this energy throughout the metal.
- While the individual collisions are elastic, the overall effect is inelastic: the kinetic energy of an electron diffuses throughout the metal.
- This can be expressed formulaically: $$\frac{\Delta Q}{\Delta t}=I=nAqv$$ ![[Current in a Wire.png|center|300]]
	- where the the charge on each electron is $q$
	- the electron density in the metal is $n$ electrons per unit volume
	- the average electron drift speed is $v$
	- After time $\Delta t$, all electrons within the cylindrical volume of area $A$ and length $v\Delta t$ will have passed out the end face
		- Thus, total charge left is $\Delta Q=n(Av\Delta t)q$
### Formula Sheet
Coulomb's Law
$$F_{electric}=k\left( \frac{q_{1}q_{2}}{r^2} \right)$$
$$F_{electric}=\left( \frac{q_{1}q_{2}}{4 \pi \epsilon_{0} lr^2} \right)$$Field Strength
 $$F_{electric}=qE$$
Electric Field
$$E=\frac{Q}{4\pi\epsilon_{0}r^2}$$Electric Potential
$$V=\frac{W}{q}$$
Current
$$I=\frac{\Delta q}{\Delta t}$$
Current in a Wire
$$\frac{\Delta Q}{\Delta t}=I=nAqv$$

### Checklist
- [ ] Describe experiments to establish nature of charge.
- [ ] Give the direction of forces between two charged objects, as well as between a charged and uncharged object.
- [ ] Describe the way that separation of charge leads to attraction between a charged and an uncharged object.
- [ ] State and apply Coulomb's law, understanding the way the constant, k, relates to the permittivity of free space.
- [ ] Describe and sketch the electric field lines around a single charge and around two adjacent charges.
- [ ] Define electric field strength.
- [ ] Define electric potential and potential difference.
- [ ] Calculate the work done when a charge moves through a potential difference.
- [ ] Translate between joules and electron-volts.
- [ ] Show how a volt is equal to a joule per coulomb.
- [ ] Show how an amp is equal to a coulomb per second.
- [ ] Discuss the nature of metals and charges within them, explaining why they are good conductors.
- [ ] Calculate the drift velocity of charge carriers.
### End of Section 5.1

>[!#important] ## 5.2 - Heating Effect of Electric Currents
### Intro to Circuits
- Conductors act as a resistance to the current flow, transforming electric potential energy to thermal energy.
	- All conductors offer some resistance to current flow, some more or less than others.
- Circuits contain the following components:
	1. An electric cell
		- powered by an electrochemical process
		- raises the electric potential energy of any charges between two points
		- creates an electric field between them
		- electrical potential energy of charges increase as they move through the cell
		- **considered the start and finish of a circuit**
	2. Connecting conductors
		- typically insulated metal wires
		- we assume there is negligible resistance and energy loss
	3. Resistors
		- a conductor that resists the flow of electric current and transforms electric potential energy to other forms of energy, such as heat or light
- In IB, circuits look like as follows: ![[Pasted image 20231023204121.png|center|300]]
### Kirchhoff's Circuit Laws
- two laws, based on conservation principles, describing that quantity does not change in an electric circuit with steady currents
- Kirchhoff's First Law — the junction rule
	- The net current entering and leaving a junction is zero. $$\sum^{n}_{m=1}I_{m}=0$$
	- Where $n$ is the total number of branches entering/leaving a single junction, and the current in each branch is $I_{m}$
	- Analogy:
		- If four skiers per second arrive at Junction D, 3 skiers go down one branch and 1 skier goes down the original trail.
		- The rate at which the skiers arrive at Junction D and the rate at which the leave Junction D are balanced.
- Kirchhoff's Second Law — the loop rule
	- In traversing any closed loop in a circuit, the net electric potential difference must be zero. $$\sum^{n}_{m=1}V_{m}=0$$
	- In calculating this, the potential difference is positive when moving in the direction of conventional current flow through a cell, and negative when moving through a resistor in the direction of conventional current flow.
		- Cells against the direction of conventional current flow (relevant to your starting point) are considered resistors (negative).
	- Analogy:
		- The potential gravitational energy that skiers gain by riding the ski lift up is transformed to zero after they ski down.

### Electric Circuit Measurements
- voltage (potential difference) is measured across electric circuit components
- current is measured through circuit components


### Circuits and Resistance
- A potential difference applied between two points on a conductor raises electric potential energy at one location with respect to another.
- This also creates an electric field.
- Potential difference is the physical cause of charge carrier drift, but what determines the amount of current?
	- Resistance does.
- Potential difference provides energy to drive charge flow, and resistance determines rate of charge flow.
	- Current is determined by potential difference and resistance.
	- For the same potential difference across a resistor, greater resistance = smaller current.
- This results in Ohm's Law. $$V=\frac{I}{R}$$
- Ohm's Law — a potential difference across two points of a resistor results in a current through it that varies inversely with the resistance of the resistor.
- The units of resistance is $V\cdot A^{-1}=ohm=\Omega$
### Resistance and Resistivity
- Resistivity is a measure of natural resistance that a substance has, independent of physical dimensions.
	- It is related to microscopic properties of a material: density of mobile electrons, characteristics of atomic lattice, presence of impurities or fractures, etc.
- Its symbol is $\rho$, and it is defined as the resistance per unit length of the material with a unit cross-section, and has the units $\Omega \cdot m$
- The resistance of an object is proportional to resistivity and length, and is inversely proportional to cross-sectional area. $$R=\frac{\rho L}{A}\ or\ \rho=\frac{RA}{L}$$
- Where length and area are in $meters$.
### Resistance and Temperature
- One of the most common uses of electricity is for heating.
- Electrical energy from a power source is transformed by a resistor into internal thermal energy, which creates a positive feedback loop by inhibiting charge carrier drift.
	- Thus, resistance and temperature continues to rise until an equilibrium is reached.
- This concept is used in incandescent lightbulbs, where filament is heated until it reaches a high enough temperature to emit light.
- Resistance increases exponentially as a resistor heats up. ![[Pasted image 20231023211952.png|center|300]]
### Resistance and Metals (Ohm's Law)
- Ohm's Law states that for a metal held at constant temperature, the current flowing through it is proportional to the potential difference across it.
- In other words, $I\propto V$ for any ohmic components (ie. components that obey this law.)
	- Ohm's Law only holds true for certain resistors at a constant temperature, mainly metals.
	- In other components, resistance changes based potential difference applied, while in ohmic components, resistance is constant (at a constant temperature).
- In a graph, an ohmic component would show a slope of $y=mx+b$ for voltage vs. current. 
### Values in Different Circuits
- Series Circuits 
	- Current, according to the junction rule: $$I_{AB}=I_{1}=I_{2}=I_{3}$$ 
	- Voltage, according to the loop rule: $$V_{AB}=V_{1}+V_{2}+V_{3}$$ 
	- Equivalent resistance (if all the resistors were combined): $$R_{AB}=R_{1}+R_{2}+R_{3}$$
	- Resistance can be calculated with $R=\frac{\rho kL}{A}$, where the k is the number of resistors in series.
- Parallel Circuits
	- Current, according to the junction rule: $$I_{AB}=I_{1}+I_{2}+I_{3}$$
	- Voltage, according to the loop rule: $$V_{AB}=V_{1}=V_{2}=V_{3}$$
	- Equivalent resistance (if all the resistors were combined): $$\frac{1}{R_{AB}}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\frac{1}{R_{3}}$$
	- Resistance can be calculated with $R=\frac{\rho L}{kA}$, where k is the number of resistors in series.
- Notes:
	- Current splits proportionately based on equivalent resistances in different branches.

### Variable Resistors
- Variable potential dividers, potentiometers, and variable resistors all describe the same component.
	- A resistor with a potential difference across it, and a third connecting point that can be moved along the length of the resistor. ![[Pasted image 20231023213605.png|center|100]]
- Potential difference is applied to $A$ and $B$, and the third connector $W$ moves along the length of the resistor.
	- Thus, the ratio of resistance between $A$ and $W$, and between $W$ and $B$ vary based on where $W$ contacts the resistor.
- This image illustrates how a variable resistor works: ![[Pasted image 20231023213848.png|center|300]]

### Analogy for Circuits
- Imagine a bucket brigade of people forming a line between a pond and a fire. The buckets are charge carriers, the potential difference is the water volume of a bucket, and the current is the rate at which buckets are moved.

### Power
- Electrical power transformed by a device in a circuit is equal to the product of the potential difference across it and the current through it.
- Mathematically, this is expressed as: $$P=I\cdot V$$
- Its unit is the watt, $W$. It is equivalent to: $$ampere \cdot volt = coulomb \cdot s^{-1} \times joule \cdot coulomb^{-1} = joule \cdot s^{-1} = watt$$
- By applying Ohm's Law, we can also find other definitions for the value of P: $$P=IV=\frac{V^{2}}{R}=I^2R$$
### Alternate Energy Unit
- the kilowatt hour is a commonly used unit for electricity ($kW \cdot h$)
- it is defined as the amount of energy transformed by a device with a power of $1kW$ operating for $1hr$.
- it can be translated to joules by changing hours into seconds, as $W\cdot s$ is equivalent to $J$.

### Formula Sheet
$$\sum^{n}_{m=1}I_{m}=0$$
$$\sum^{n}_{m=1}V_{m}=0$$
$$V=\frac{I}{R}$$
 $$R=\frac{\rho L}{A}\ or\ \rho=\frac{RA}{L}$$
 $$P=IV=\frac{V^{2}}{R}=I^2R$$
 $$\text{Also see: Values in Different Circuits for Current, Voltage, Resistance in Series and Parallel Circuits}$$
### Checklist
- [ ] Draw and interpret circuit diagrams, distinguishing between components connected in parallel and series.
- [ ] Quote and apply Kirchhoff's laws to any circuits.
- [ ] State that currents passing through a resistor will inevitably heat it and calculate the power dissipated.
- [ ] Distinguish between power and energy, and convert between them (given the time span).
- [ ] Manipulate $kW⋅hkW⋅h$ as a unit of energy.
- [ ] Quote Ohm's law.
- [ ] Recognise ohmic and non-ohmic resistors from their $V/I$ characteristic graphs.
- [ ] Apply $V=IRV=IR$ to any part of any circuit.
- [ ] Define resistivity and make relevant calculations.
- [ ] Describe ideal and non-ideal ammeters and voltmeters.
- [ ] Describe the function and operation of a potential divider.

### End of Section 5.2

>[!#important] ##  5.3 - Electric Cells


### Checklist
- [ ] Distinguish between primary and secondary cells.
- [ ] Understand that cells reduce their voltage as they are used, and describe a typical characteristic for a simple cell.
- [ ] Describe how to connect a secondary cell in order for it to recharge.
- [ ] Understand that the capacity of a battery is measured in Ah and convert this to coulombs.
- [ ] Describe a circuit to find the internal resistance of a cell.
- [ ] Calculate the internal resistance and give the emf of a cell from a graph of V against I.
- [ ] Derive and use the formula $V = Ɛ - I\cdot r$.
- [ ] Define emf and use the formula $\epsilon=\frac{W}{Q}$
- [ ] Define internal resistance.

### End of Section 5.3

>[!#important] ##  5.4 - Magnetic Effects of Electric Currents
### Magnets in Reality


>[!abstract] ## Recipes for Success

Three point charges with charge $x,y,z$ are arranged on a field, $a,b,c$ far away from each other.
1. plug value of first charge & affected charge into Coulomb's law $F_{electric}=k\left( \frac{q_{1}q_{2}}{r^{2}} \right)$
2. solve for $F_{electric}$
3. repeat for second charge & affected charge
4. the resultant force is $F_{resultant}=\sqrt{ F_{AB}^{2} + F_{BC}^{2}}$

What is the ratio of electric field strength at two points, $M$ and $N$?
1. According to Coulomb's Law, force decreases with the square of the distance, so $N$ experiences a field of $r^2$ weaker than $M$, if $M$ is closer to the charge than $N$.

Two point charges of charge $M$ and $N$ are separated by $x$ cm. How far from the $M$ charge must a new charge be placed for it to experience no force?
1. Find the point of equilibrium using Coulomb's Law — produce expression $$\frac{M}{d^2}=\frac{N}{(d-x)^2}$$
2. Using this expression, solve for $d$, the distance from $M$ to the new charge.

In a circuit with two loops, find the $\epsilon$ of a cell.
1. Using Kirchoff's Second Law, conservation of voltaged

Approaching Circuits in Series & Parallel:
1. Calculate equivalent resistance
2. Calculate current (V=IR)
3. Point system (Break down the circuit into points at each junction, or after each resistor)
	1. ![[Pasted image 20231024063117.png|300]]
4. For current in parallel, get voltage and resistance at points before and after the branching.

Approaching Circuits w/ Capacitors in Series & Parallel:
1. Equivalent capacitance (parallel: $C_{T}=C_{1}+C_{2}$, series: $\frac{1}{C_{T}}=\frac{1}{C_{1}}+\frac{1}{C_{2}}$)
2. Charge on all capacitors ($Q=C_{eq}\cdot V$)
	1. Split for capacitors in parallel ($Q=Q_{T}\left( \frac{C_{1}}{C_{1}+C_{2}} \right)$
3. Voltage of capacitors ($Q=CV,\ so\ V=\frac{Q}{C}$)
	1. Capacitors in parallel —> voltage is the same
	2. Capacitors in series —> charge is the same
4. Energy of capacitors ($E=\frac{1}{2}CV^2$)

