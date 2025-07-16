#!/bin/bash

# Extract package name and version from package.json
PACKAGE_NAME=$(grep -m 1 '"name":' package.json | sed -E 's/.*"name": "([^"]+)".*/\1/')
PACKAGE_VERSION=$(grep -m 1 '"version":' package.json | sed -E 's/.*"version": "([^"]+)".*/\1/')

# Create timestamp for backup file
DATE=$(date +'%d-%m-%YT%H-%M')

# Create backup filename
FILENAME=$PACKAGE_NAME"_"$PACKAGE_VERSION"_"$DATE.tgz

# move up a directory so tar can keep directory names
cd ..

# Create backup directory if it doesn't exist
BACKUP_DIR="archive/"
mkdir -p "$BACKUP_DIR"

# Create backup
tar \
--exclude="$PACKAGE_NAME/package-lock.json" \
--exclude="$PACKAGE_NAME/dist" \
--exclude="$PACKAGE_NAME/build" \
--exclude="$PACKAGE_NAME/node_modules" \
--exclude="$PACKAGE_NAME/.angular" \
--hard-dereference \
-hczf "$BACKUP_DIR/$FILENAME" $PACKAGE_NAME

echo $FILENAME
