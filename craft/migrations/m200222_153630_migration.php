<?php
namespace craft\contentmigrations;

use craft\db\Migration;
use dgrigg\migrationassistant\MigrationAssistant;

/**
 * Generated migration
 */
class m200222_153630_migration extends Migration
{

	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    //add your custom migration code, see the EXAMPLES.md for examples
        return true;    }

    public function safeDown()
    {
        echo "m200222_153630_migration cannot be reverted.\n";
        return false;
    }
}
