export interface Invitation {
  hosts:  Host;
  guests: Guest[];
}

export interface Guest {
  id?:    string;
  names?: Names;
}

export enum Names {
  Invitados = "Invitados",
}

export interface Host {
  id?:         number;
  names?:      string;
  info_hosts?: InfoHost[];
  direction?:  Direction;
}

export interface Direction {
  address:      string;
  link_address: string;
  country:      string;
  state:        string;
  island:       string;
  map:          string;
}

export interface InfoHost {
  name:            string;
  phone:           string;
  social_networks: SocialNetwork[];
  parents:         Parent[];
}

export interface Parent {
  name:         string;
  relationship: string;
}

export interface SocialNetwork {
  instagram: string;
  linkedin:  string;
  facebook:  string;
}
