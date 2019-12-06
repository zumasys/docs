# Expanding a disk, physical and logical volume

**Created At:** 8/23/2017 11:43:15 PM  
**Updated At:** 8/23/2017 11:43:38 PM  


## Display original Disk Sizes

[root@dbejbase01 ~]# ***fdisk -l | grep GB &lt;Enter&gt;***shows what it was

Disk /dev/sda: 32.2 GB, 32212254720 bytes, 62914560 sectors

Disk /dev/sdc: 53.7 GB, 53687091200 bytes, 104857600 sectors

Disk /dev/sdb: 32.2 GB, 32212254720 bytes, 62914560 sectors

Disk /dev/mapper/centos-root: 18.8 GB, 18798870528 bytes, 36716544 sectors

Disk /dev/mapper/convvg-conv: 32.2 GB, 32212254720 bytes, 62914560 sectors

Disk /dev/mapper/vg00-dbms: 32.2 GB, 32208060416 bytes, 62906368 sectors

## Alter the actual disk by adding space at the VM level (Not in the scope of this document)

## reboot and see them

[root@dbejbase01 ~]# ***fdisk -l | grep GB &lt;Enter&gt;***YOUR DRIVE?  /dev/sd<u>b___</u>

Disk /dev/sdb: 161.1 GB, 161061273600 bytes, 314572800 sectors

Disk /dev/sdc: 536.9 GB, 536870912000 bytes, 1048576000 sectors

Disk /dev/sda: 32.2 GB, 32212254720 bytes, 62914560 sectors

Disk /dev/mapper/centos-root: 18.8 GB, 18798870528 bytes, 36716544 sectors

Disk /dev/mapper/convvg-conv: 32.2 GB, 32212254720 bytes, 62914560 sectors

Disk /dev/mapper/vg00-dbms: 32.2 GB, 32208060416 bytes, 62906368 sectors

## List physical volume groups

[root@dbejbase01 ~]# ***pvs &lt;Enter&gt;***YOUR VG  \_<u>vg00</u>\_\_\_\_\_\_

PV         VG     Fmt  Attr PSize  PFree

/dev/sda2  centos lvm2 a--  19.51g    0

/dev/sdb1  vg00   lvm2 a--  30.00g    0

/dev/sdc1  convvg lvm2 a--  32.00g 2.00g

## List logical volume groups

[root@dbejbase01 ~]# ***lvs &lt;Enter&gt;***YOUR LOGICAL NAME \_\_\_<u>dbms</u>\_\_\_\_\_\_

LV   VG     Attr       LSize  Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert

root centos -wi-ao---- 17.51g

swap centos -wi-ao----  2.00g

conv convvg -wi-ao---- 30.00g

dbms vg00   -wi-ao---- 30.00g

## Add new partition to expanded disk

[root@dbejbase01 ~]# ***fdisk /dev/<u>sdb</u><u>&nbsp; </u> &lt;Enter&gt;***/dev/sdb because it relates to vg00 which is
                                                       where the /dbms is located.  The pvs command
                                                       showed /dev/sdb1 vg00 and the lvs command
                                                       showed dbms logical volume is on vg00
Welcome to fdisk (util-linux 2.23.2).

Changes will remain in memory only, until you decide to write them.

Be careful before using the write command.

Command (m for help): ***p &lt;Enter&gt;***

Disk /dev/sdb: 161.1 GB, 161061273600 bytes, 314572800 sectors

Units = sectors of 1 \* 512 = 512 bytes

Sector size (logical/physical): 512 bytes / 512 bytes

I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk label type: dos

Disk identifier: 0x0a1abf8f

Device Boot      Start         End      Blocks   Id  System

/dev/sdb1            2048    62914559    31456256   83  Linux

Command (m for help): ***n &lt;Enter&gt;***

Partition type:

p   primary (1 primary, 0 extended, 3 free)

e   extended

Select (default p): ***&lt;Enter&gt;***

Using default response p

Partition number (2-4, default 2): ***&lt;Enter&gt;***

First sector (62914560-314572799, default 62914560): ***&lt;Enter&gt;***

Using default value 62914560

Last sector, +sectors or +size{K,M,G}(62914560-314572799, default 314572799): ***&lt;Enter&gt;***

Using default value 314572799

Partition 2 of type Linux and of size 120 GiB is set

Command (m for help): ***t &lt;Enter&gt;***

Partition number (1,2, default 2): ***&lt;Enter&gt;***

Hex code (type L to list all codes): ***8e &lt;Enter&gt;***

Changed type of partition 'Linux' to 'Linux LVM'

Command (m for help): ***w &lt;Enter&gt;***

The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: Device or resource

busy.

The kernel still uses the old table. The new table will be used at

the next reboot or after you run partprobe(8) or kpartx(8)

Syncing disks.

## Run "partprobe" to make kernel recognize new partion

[root@dbejbase01 ~]# ***partprobe &lt;Enter&gt;***

## Check with fdisk

[root@dbejbase01 ~]# ***fdisk -l /dev/sdb &lt;Enter&gt;***New partition   \_<u>/dev/sdb2</u>\_\_\_\_\_

Disk /dev/sdb: 161.1 GB, 161061273600 bytes, 314572800 sectors

Units = sectors of 1 \* 512 = 512 bytes

Sector size (logical/physical): 512 bytes / 512 bytes

I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk label type: dos

Disk identifier: 0x0a1abf8f

Device Boot      Start         End      Blocks   Id  System

/dev/sdb1            2048    62914559    31456256   83  Linux

/dev/sdb2        62914560   314572799   125829120   8e  Linux LVM

## Create a new physical volume for the new partition

[root@dbejbase01 ~]# ***pvcreate******/dev/sdb2 &lt;Enter&gt;***

Physical volume "/dev/sdb2" successfully created.

## Extend the volumegroup

[root@dbejbase01 ~]# ***vgextend vg00 /dev/sdb2 &lt;Enter&gt;***vg00 from the pvs command

Volume group "vg00" successfully extended               /dev/sdb2 from fdisk -l /dev/sdb

## Verify physical volume group is extended

[root@dbejbase01 ~]# ***pvs &lt;Enter&gt;***

PV         VG     Fmt  Attr PSize   PFree

/dev/sda2  centos lvm2 a--   19.51g      0

/dev/sdb1  vg00   lvm2 a--   30.00g      0

/dev/sdb2  vg00   lvm2 a--  120.00g 120.00g

/dev/sdc1  convvg lvm2 a--   32.00g   2.00g

## Extend the logical volume group

[root@dbejbase01 ~]# ***lvextend -l +100%Free /dev/vg00/dbms &lt;Enter&gt;******vg00 from pvs******dbms from lvs***

Size of logical volume vg00/dbms changed from 30.00 GiB (7679 extents) to 149.

99 GiB (38398 extents).

Logical volume vg00/dbms successfully resized.

## Extend the file system over the logical valume group

[root@dbejbase01 ~]# ***xfs\_growfs /dev/mapper/vg00-dbms -d &lt;Enter&gt;******vg00 from pvs******dbms from lvs***

meta-data=/dev/mapper/vg00-dbms  isize=256    agcount=4, agsize=1965824 blks

=                       sectsz=512   attr=2, projid32bit=1

=                       crc=0        finobt=0 spinodes=0

data     =                       bsize=4096   blocks=7863296, imaxpct=25

=                       sunit=0      swidth=0 blks

naming   =version 2              bsize=4096   ascii-ci=0 ftype=0

log      =internal               bsize=4096   blocks=3839, version=2

=                       sectsz=512   sunit=0 blks, lazy-count=1

realtime =none                   extsz=4096   blocks=0, rtextents=0

data blocks changed from 7863296 to 39319552

## Verify the filesystem is extended

[root@dbejbase01 ~]# ***df -h &lt;Enter&gt;***

Filesystem               Size  Used Avail Use% Mounted on

/dev/mapper/centos-root   18G  7.0G   11G  40% /

devtmpfs                 905M     0  905M   0% /dev

tmpfs                    920M     0  920M   0% /dev/shm

tmpfs                    920M  8.9M  912M   1% /run

tmpfs                    920M     0  920M   0% /sys/fs/cgroup

/dev/sda1                497M  242M  256M  49% /boot

/dev/mapper/convvg-conv   30G   28G  2.6G  92% /conv

/dev/mapper/vg00-dbms    150G   13G  138G   9% /dbms

tmpfs                    184M     0  184M   0% /run/user/1000
