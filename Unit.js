export class Unit
{
    constructor()
    {
        let name;
        let health;
        let speed;
        let type;
        let armour;

        const costs = new Array(3);
        // const weapon = [];

    }

    unit_copy(parent)
    {
      this.name = parent['$'].id;
      this.type = parent['$'].type;

      if(parent.Health != null)
      {
        this.health = parent.Health[0];

      }

      if(parent.ArmorType != null)
      {
        this.armour = parent.ArmorType[0];

      }

      if(parent.MoveSpeed != null)
      {
        this.speed = parent.MoveSpeed[0];

      }

      if(parent.BuildCost != null)
      {
        this.costs = parent.BuildCost[0];

      }

    }

    unit_inherit(parent)
    {
      this.type = parent.type;
		  this.health = parent.health;
		  this.armour = parent.armour;
		  this.speed = parent.speed;
		  this.costs = parent.costs;

    }

    unit_display()
    {
      console.log(this.name);
      console.log("Type: " + this.type);
      console.log("Health: " + this.health);
      console.log("Armour Type: " + this.armour);
      console.log("Speed: " + this.speed);

      if(this.costs != null)
      {
        console.log("Iron Cost: " + this.costs.IronCost + "\t Oil Cost: " + this.costs.OilCost + "\t Population: " + this.costs.PopulationCost);
      }
    }


}

export class Human extends Unit 
{
  constructor()
  {

      super();
      // const weapon = [];

  }

  human_copy(parent)
  {

    this.name = parent['$'].id;
    this.type = parent['$'].type;

    if(parent.Health != null)
    {
      this.health = parent.Health[0];

    }

    if(parent.ArmorType != null)
    {
      this.armour = parent.ArmorType[0];

    }

    if(parent.PrimaryMoveSpeed != null)
    {
      this.speed = parent.PrimaryMoveSpeed[0];

    }

    if(parent.BuildCost != null)
    {
      this.costs = parent.BuildCost[0];

    }

  }

  human_inherit(parent)
  {
    this.type = parent.type;
    this.health = parent.health;
    this.armour = parent.armour;
    this.speed = parent.speed;
    this.costs = parent.costs;

  }

  human_display()
  {
    console.log(this.name);
    console.log("Type: " + this.type);
    console.log("Health: " + this.health);
    console.log("Armour Type: " + this.armour);
    console.log("Speed: " + this.speed);
    console.log("Iron Cost: " + this.costs.IronCost + "\t Oil Cost: " + this.costs.OilCost + "\t Population: " + this.costs.PopulationCost);

  }
}