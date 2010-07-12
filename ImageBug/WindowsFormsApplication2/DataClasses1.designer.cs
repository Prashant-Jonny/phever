﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:2.0.50727.4927
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WindowsFormsApplication2
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	public partial class DataClasses1DataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    #endregion
		
		public DataClasses1DataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public DataClasses1DataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public DataClasses1DataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public DataClasses1DataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<T3_Files> T3_Files
		{
			get
			{
				return this.GetTable<T3_Files>();
			}
		}
		
		public System.Data.Linq.Table<T2> T2s
		{
			get
			{
				return this.GetTable<T2>();
			}
		}
		
		public System.Data.Linq.Table<T3_Folders> T3_Folders
		{
			get
			{
				return this.GetTable<T3_Folders>();
			}
		}
		
		public System.Data.Linq.Table<T1_Local> T1_Locals
		{
			get
			{
				return this.GetTable<T1_Local>();
			}
		}
		
		public System.Data.Linq.Table<UserData> UserDatas
		{
			get
			{
				return this.GetTable<UserData>();
			}
		}
		
		public System.Data.Linq.Table<GlobalData> GlobalDatas
		{
			get
			{
				return this.GetTable<GlobalData>();
			}
		}
		
		public System.Data.Linq.Table<User> Users
		{
			get
			{
				return this.GetTable<User>();
			}
		}
		
		public System.Data.Linq.Table<T1_Global> T1_Globals
		{
			get
			{
				return this.GetTable<T1_Global>();
			}
		}
		
		public System.Data.Linq.Table<Last_Sync_Local> Last_Sync_Locals
		{
			get
			{
				return this.GetTable<Last_Sync_Local>();
			}
		}
		
		public System.Data.Linq.Table<Last_USN> Last_USNs
		{
			get
			{
				return this.GetTable<Last_USN>();
			}
		}
		
		public System.Data.Linq.Table<Last_Sync_Global> Last_Sync_Globals
		{
			get
			{
				return this.GetTable<Last_Sync_Global>();
			}
		}
		
		public System.Data.Linq.Table<Commit_list> Commit_lists
		{
			get
			{
				return this.GetTable<Commit_list>();
			}
		}
		
		public System.Data.Linq.Table<Counter> Counters
		{
			get
			{
				return this.GetTable<Counter>();
			}
		}
	}
	
	[Table(Name="")]
	public partial class T3_Files
	{
		
		private ulong _frn;
		
		private string _name;
		
		private ulong _parent_frn;
		
		public T3_Files()
		{
		}
		
		[Column(Storage="_frn")]
		public ulong frn
		{
			get
			{
				return this._frn;
			}
			set
			{
				if ((this._frn != value))
				{
					this._frn = value;
				}
			}
		}
		
		[Column(Storage="_name", CanBeNull=false)]
		public string name
		{
			get
			{
				return this._name;
			}
			set
			{
				if ((this._name != value))
				{
					this._name = value;
				}
			}
		}
		
		[Column(Storage="_parent_frn")]
		public ulong parent_frn
		{
			get
			{
				return this._parent_frn;
			}
			set
			{
				if ((this._parent_frn != value))
				{
					this._parent_frn = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class T2
	{
		
		private ulong _frn;
		
		private string _hash;
		
		public T2()
		{
		}
		
		[Column(Storage="_frn")]
		public ulong frn
		{
			get
			{
				return this._frn;
			}
			set
			{
				if ((this._frn != value))
				{
					this._frn = value;
				}
			}
		}
		
		[Column(Name="hash", Storage="_hash", CanBeNull=false)]
		public string md5
		{
			get
			{
				return this._hash;
			}
			set
			{
				if ((this._hash != value))
				{
					this._hash = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class T3_Folders
	{
		
		private ulong _frn;
		
		private string _name;
		
		private ulong _parent_frn;
		
		public T3_Folders()
		{
		}
		
		[Column(Storage="_frn")]
		public ulong frn
		{
			get
			{
				return this._frn;
			}
			set
			{
				if ((this._frn != value))
				{
					this._frn = value;
				}
			}
		}
		
		[Column(Storage="_name", CanBeNull=false)]
		public string name
		{
			get
			{
				return this._name;
			}
			set
			{
				if ((this._name != value))
				{
					this._name = value;
				}
			}
		}
		
		[Column(Storage="_parent_frn")]
		public ulong parent_frn
		{
			get
			{
				return this._parent_frn;
			}
			set
			{
				if ((this._parent_frn != value))
				{
					this._parent_frn = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class T1_Local
	{
		
		private string _tag;
		
		private string _hash;
		
		private string _location;
		
		public T1_Local()
		{
		}
		
		[Column(Storage="_tag", CanBeNull=false)]
		public string tag
		{
			get
			{
				return this._tag;
			}
			set
			{
				if ((this._tag != value))
				{
					this._tag = value;
				}
			}
		}
		
		[Column(Name="hash", Storage="_hash", CanBeNull=false)]
		public string md5
		{
			get
			{
				return this._hash;
			}
			set
			{
				if ((this._hash != value))
				{
					this._hash = value;
				}
			}
		}
		
		[Column(Storage="_location", CanBeNull=false)]
		public string location
		{
			get
			{
				return this._location;
			}
			set
			{
				if ((this._location != value))
				{
					this._location = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class UserData
	{
		
		private string _hash;
		
		private string _tags;
		
		private string _user;
		
		private string _Last_Updated;
		
		private string _location;
		
		private string _Lock;
		
		public UserData()
		{
		}
		
		[Column(Name="hash", Storage="_hash", CanBeNull=false)]
		public string md5
		{
			get
			{
				return this._hash;
			}
			set
			{
				if ((this._hash != value))
				{
					this._hash = value;
				}
			}
		}
		
		[Column(Storage="_tags", CanBeNull=false)]
		public string tags
		{
			get
			{
				return this._tags;
			}
			set
			{
				if ((this._tags != value))
				{
					this._tags = value;
				}
			}
		}
		
		[Column(Storage="_user", CanBeNull=false)]
		public string user
		{
			get
			{
				return this._user;
			}
			set
			{
				if ((this._user != value))
				{
					this._user = value;
				}
			}
		}
		
		[Column(Storage="_Last_Updated", CanBeNull=false)]
		public string Last_Updated
		{
			get
			{
				return this._Last_Updated;
			}
			set
			{
				if ((this._Last_Updated != value))
				{
					this._Last_Updated = value;
				}
			}
		}
		
		[Column(Storage="_location", CanBeNull=false)]
		public string location
		{
			get
			{
				return this._location;
			}
			set
			{
				if ((this._location != value))
				{
					this._location = value;
				}
			}
		}
		
		[Column(Storage="_Lock", CanBeNull=false)]
		public string Lock
		{
			get
			{
				return this._Lock;
			}
			set
			{
				if ((this._Lock != value))
				{
					this._Lock = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class GlobalData
	{
		
		private string _hash;
		
		private string _tags;
		
		private string _users;
		
		private string _Last_Updated;
		
		private string _location;
		
		public GlobalData()
		{
		}
		
		[Column(Name="hash", Storage="_hash", CanBeNull=false)]
		public string md5
		{
			get
			{
				return this._hash;
			}
			set
			{
				if ((this._hash != value))
				{
					this._hash = value;
				}
			}
		}
		
		[Column(Storage="_tags", CanBeNull=false)]
		public string tags
		{
			get
			{
				return this._tags;
			}
			set
			{
				if ((this._tags != value))
				{
					this._tags = value;
				}
			}
		}
		
		[Column(Storage="_users", CanBeNull=false)]
		public string users
		{
			get
			{
				return this._users;
			}
			set
			{
				if ((this._users != value))
				{
					this._users = value;
				}
			}
		}
		
		[Column(Storage="_Last_Updated", CanBeNull=false)]
		public string Last_Updated
		{
			get
			{
				return this._Last_Updated;
			}
			set
			{
				if ((this._Last_Updated != value))
				{
					this._Last_Updated = value;
				}
			}
		}
		
		[Column(Storage="_location", CanBeNull=false)]
		public string location
		{
			get
			{
				return this._location;
			}
			set
			{
				if ((this._location != value))
				{
					this._location = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class User
	{
		
		private string _username;
		
		private string _email;
		
		private string _secret;
		
		public User()
		{
		}
		
		[Column(Storage="_username", CanBeNull=false)]
		public string username
		{
			get
			{
				return this._username;
			}
			set
			{
				if ((this._username != value))
				{
					this._username = value;
				}
			}
		}
		
		[Column(Storage="_email", CanBeNull=false)]
		public string email
		{
			get
			{
				return this._email;
			}
			set
			{
				if ((this._email != value))
				{
					this._email = value;
				}
			}
		}
		
		[Column(Storage="_secret", CanBeNull=false)]
		public string secret
		{
			get
			{
				return this._secret;
			}
			set
			{
				if ((this._secret != value))
				{
					this._secret = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class T1_Global
	{
		
		private string _tag;
		
		private string _hash;
		
		private string _location;
		
		public T1_Global()
		{
		}
		
		[Column(Storage="_tag", CanBeNull=false)]
		public string tag
		{
			get
			{
				return this._tag;
			}
			set
			{
				if ((this._tag != value))
				{
					this._tag = value;
				}
			}
		}
		
		[Column(Name="hash", Storage="_hash", CanBeNull=false)]
		public string md5
		{
			get
			{
				return this._hash;
			}
			set
			{
				if ((this._hash != value))
				{
					this._hash = value;
				}
			}
		}
		
		[Column(Storage="_location", CanBeNull=false)]
		public string location
		{
			get
			{
				return this._location;
			}
			set
			{
				if ((this._location != value))
				{
					this._location = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class Last_Sync_Local
	{
		
		public Last_Sync_Local()
		{
		}
	}
	
	[Table(Name="")]
	public partial class Last_USN
	{
		
		public Last_USN()
		{
		}
	}
	
	[Table(Name="")]
	public partial class Last_Sync_Global
	{
		
		public Last_Sync_Global()
		{
		}
	}
	
	[Table(Name="")]
	public partial class Commit_list
	{
		
		private string _md5;
		
		private string _tag;
		
		private string _location;
		
		private string _timestamp;
		
		private string _reason;
		
		public Commit_list()
		{
		}
		
		[Column(Storage="_md5", CanBeNull=false)]
		public string md5
		{
			get
			{
				return this._md5;
			}
			set
			{
				if ((this._md5 != value))
				{
					this._md5 = value;
				}
			}
		}
		
		[Column(Storage="_tag", CanBeNull=false)]
		public string tag
		{
			get
			{
				return this._tag;
			}
			set
			{
				if ((this._tag != value))
				{
					this._tag = value;
				}
			}
		}
		
		[Column(Storage="_location", CanBeNull=false)]
		public string location
		{
			get
			{
				return this._location;
			}
			set
			{
				if ((this._location != value))
				{
					this._location = value;
				}
			}
		}
		
		[Column(Storage="_timestamp", CanBeNull=false)]
		public string timestamp
		{
			get
			{
				return this._timestamp;
			}
			set
			{
				if ((this._timestamp != value))
				{
					this._timestamp = value;
				}
			}
		}
		
		[Column(Storage="_reason", CanBeNull=false)]
		public string reason
		{
			get
			{
				return this._reason;
			}
			set
			{
				if ((this._reason != value))
				{
					this._reason = value;
				}
			}
		}
	}
	
	[Table(Name="")]
	public partial class Counter
	{
		
		private string _type;
		
		private string _key;
		
		private string _count;
		
		public Counter()
		{
		}
		
		[Column(Storage="_type", CanBeNull=false)]
		public string type
		{
			get
			{
				return this._type;
			}
			set
			{
				if ((this._type != value))
				{
					this._type = value;
				}
			}
		}
		
		[Column(Storage="_key", CanBeNull=false)]
		public string key
		{
			get
			{
				return this._key;
			}
			set
			{
				if ((this._key != value))
				{
					this._key = value;
				}
			}
		}
		
		[Column(Storage="_count", CanBeNull=false)]
		public string count
		{
			get
			{
				return this._count;
			}
			set
			{
				if ((this._count != value))
				{
					this._count = value;
				}
			}
		}
	}
}
#pragma warning restore 1591