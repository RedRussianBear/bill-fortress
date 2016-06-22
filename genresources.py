import re
import subprocess
import sys

hierarchy = []
sprites = []
workdir = sys.argv[1]

def crawl ( dir ):
	hierarchy.append(dir)
	lstring = ""
	
	for direct in hierarchy:
		lstring += direct + "/"

	subdirects = subprocess.check_output(["ls", workdir + "/" + lstring]).decode("utf-8")
	
	frames = re.findall("frame([a-z]*?)([0-9]+).png", subdirects)
	
	if(len(frames) > 0):
		tag = ""
		for i in range(1, len(hierarchy)):
			tag += hierarchy[i][0]
		
		sprite = []
		sprite.append(tag)
		
		for frame in frames:
			sprite.append(tag + frame[0] + frame[1])
			sprite.append(lstring + "frame" + frame[0] + frame[1] + ".png")
		
		sprites.append(sprite)

	else:
		toexplore = re.findall("[^\s\n\t]+", subdirects)
	
		for direct in toexplore:
			crawl(direct)
	
	hierarchy.pop()

def direction(x):
    return {
        'n': "mobs.DIRECTION.UP",
        's': "mobs.DIRECTION.DOWN",
		'w': "mobs.DIRECTION.LEFT",
		'e': "mobs.DIRECTION.RIGHT"
    }.get(x, "")

crawl(".")

target = open("load.txt", "w")

for frames in sprites:
	for i in range(1, len(frames), 2):
		target.write("this.resources.queue(\"" + frames[i] + "\", resource.IMAGE, \"" + frames[i + 1] + "\");\n")

target.write("\n\n")
		
for frames in sprites:
	target.write("mobs.SPRITES[\"" + frames[0] + "\"] = new Array();\n")
	target.write("mobs.SPRITES[\"" + frames[0] + "\"][mobs.DIRECTION.UP] = new Array();\n")
	target.write("mobs.SPRITES[\"" + frames[0] + "\"][mobs.DIRECTION.DOWN] = new Array();\n")
	target.write("mobs.SPRITES[\"" + frames[0] + "\"][mobs.DIRECTION.LEFT] = new Array();\n")
	target.write("mobs.SPRITES[\"" + frames[0] + "\"][mobs.DIRECTION.RIGHT] = new Array();\n")
	for i in range(1, len(frames), 2):
		target.write("mobs.SPRITES[\"" + frames[0] + "\"][" + direction(frames[i][len(frames[i]) - 2]) + "].push(that.resources.$(\"" + frames[i] + "\"));\n")

target.close()
