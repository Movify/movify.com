<?php
namespace craft\contentmigrations;

use craft\db\Migration;
use dgrigg\migrationassistant\MigrationAssistant;

/**
 * Generated migration
 */
class m200223_182207_migration_keys extends Migration
{
    /**
    Migration manifest:
    
    GLOBAL
        - keys
            */

private $json = <<<'JSON'
{"settings":{"dependencies":[],"elements":{"globals":[{"name":"keys","handle":"keys","fieldLayout":{"google":["googleAnalyticsCode","googleMapApi"]},"requiredFields":[]}]}}}
JSON;

	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    return MigrationAssistant::getInstance()->migrations->import($this->json);    }

    public function safeDown()
    {
        echo "m200223_182207_migration_keys cannot be reverted.\n";
        return false;
    }
}
