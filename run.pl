#!/usr/bin/perl -w
if($#ARGV != 1) {
	print "Usage: perl run.pl <node_name> <command>\n";
	exit;
}
$node = $ARGV[0];
$comm = $ARGV[1];
print  "$node is $comm\n";